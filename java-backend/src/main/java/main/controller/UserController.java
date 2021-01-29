package main.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import main.dao.UserDao;
import main.model.Phone;
import main.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class UserController {
    private final UserDao userDao;

    private final ObjectMapper mapper = new ObjectMapper();

    @Autowired
    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping("/users/login")
    @ResponseBody
    public String getUser(@RequestParam("login") String login,
                          @RequestParam("password") String password) throws JsonProcessingException {
        List<User> userList = userDao.getUser(login);
        if (userList.isEmpty() || !userList.get(0).getPassword().equals(password)) {
            throw new RuntimeException("No such user");
        }
        return mapper.writeValueAsString("");
    }

    @PostMapping("/users/register")
    @ResponseBody
    public String addUser(@RequestParam("login") String login,
                          @RequestParam("password") String password,
                          @RequestParam("name") String name) throws JsonProcessingException {
        List<User> userList = userDao.getUser(login);
        if (!userList.isEmpty()) {
            throw new RuntimeException("Login already in use");
        }
        userDao.addUser(new User(login, password, name));
        return mapper.writeValueAsString("");
    }

    @GetMapping("/users/phones")
    @ResponseBody
    public String getPhones(@RequestParam("login") String login) throws JsonProcessingException {
        return mapper.writeValueAsString(userDao.getPhones(login));
    }

    @PostMapping("/users/phones")
    @ResponseBody
    public String addPhone(@RequestParam("login") String login,
                           @RequestParam("name") String name,
                           @RequestParam("phone") String phone) throws JsonProcessingException {
        userDao.addPhone(login, new Phone(name, phone));
        return mapper.writeValueAsString("");
    }

    @PostMapping("/users/reset")
    @ResponseBody
    public String reset() throws JsonProcessingException {
        userDao.reset();
        return mapper.writeValueAsString("");
    }
}

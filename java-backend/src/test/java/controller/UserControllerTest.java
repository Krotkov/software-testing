package controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import main.controller.UserController;
import main.dao.UserDao;
import main.model.Phone;
import main.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = UserController.class)
@AutoConfigureMockMvc
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserDao userDao;

    private final ObjectMapper mapper = new ObjectMapper();

    @Test
    public void testGoodLogin() throws Exception {
        String login = "abacaba";

        User user = new User(login, "a", "b");

        when(userDao.getUser(login)).thenReturn(Collections.singletonList(user));

        String expected = mapper.writeValueAsString("");

        mockMvc.perform(get("/users/login?login=" + login + "&password=a"))
                .andExpect(status().isOk())
                .andExpect(content().string(expected));
    }

    @Test
    public void testGetPhone() throws Exception {
        String login = "abacaba";
        String name = "qwerty";
        String phoneNumber = "12345678900";
        Phone phone = new Phone(name, phoneNumber);

        when(userDao.getPhones(login)).thenReturn(Collections.singletonList(phone));
        String expected = mapper.writeValueAsString(Collections.singletonList(phone));

        mockMvc.perform((get("/users/phones/?login=" + login)))
                .andExpect(status().isOk())
                .andExpect(content().string(expected));
    }
}

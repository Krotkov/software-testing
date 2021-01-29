package main.dao;

import main.model.Phone;
import main.model.User;

import java.util.List;

public interface UserDao {
    int addUser(User user);

    List<User> getUser(String login);

    int addPhone(String login, Phone phone);

    List<Phone> getPhones(String login);

    void reset();
}

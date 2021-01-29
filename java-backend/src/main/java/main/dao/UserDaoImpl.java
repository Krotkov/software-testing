package main.dao;

import main.model.Phone;
import main.model.User;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;

import javax.sql.DataSource;
import java.util.List;

public class UserDaoImpl extends JdbcDaoSupport implements UserDao {
    public UserDaoImpl(DataSource dataSource) {
        super();
        setDataSource(dataSource);
        String initUsers = "CREATE TABLE IF NOT EXISTS USERS " +
                "(NAME VARCHAR(50) not null, " +
                "LOGIN VARCHAR(50) not null primary key," +
                "PASSWORD VARCHAR(50) not null);";

        String initPhone = "CREATE TABLE IF NOT EXISTS PHONES " +
                "(NAME VARCHAR(50) not null, " +
                "PHONE VARCHAR(50) not null, " +
                "LOGIN VARCHAR(50) not null, " +
                "FOREIGN KEY (LOGIN) references USERS (LOGIN));";
        getJdbcTemplate().update(initUsers);
        getJdbcTemplate().update(initPhone);
    }

    @Override
    public int addUser(User user) {
        String sql = "INSERT INTO USERS (LOGIN, PASSWORD, NAME) VALUES (" +
                "'" + user.getLogin() + "'" + ", " +
                "'" + user.getPassword() + "'" + ", " +
                "'" + user.getName() + "'" + ");";
        return getJdbcTemplate().update(sql);
    }

    @Override
    public List<User> getUser(String login) {
        String sql = "SELECT * " +
                "FROM USERS " +
                "WHERE USERS.LOGIN = \"" +
                login +
                "\";";
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(User.class));
    }

    @Override
    public int addPhone(String login, Phone phone) {
        String sql = "INSERT INTO PHONES (NAME, PHONE, LOGIN) VALUES (?, ?, ?)";
        return getJdbcTemplate().update(sql, phone.getName(), phone.getPhone(), login);
    }

    @Override
    public List<Phone> getPhones(String login) {
        String sql = "SELECT * " +
                "FROM PHONES " +
                "WHERE PHONES.LOGIN = \"" +
                login +
                "\";";
        return getJdbcTemplate().query(sql, new BeanPropertyRowMapper(Phone.class));
    }

    @Override
    public void reset() {
        String sql = "TRUNCATE PHONES; \nTRUNCATE USERS;";
        getJdbcTemplate().update(sql);
    }
}

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;

public class SeleniumTest {
    @BeforeEach
    public void login() {
        open("http://localhost:3001");
        $("#sign-in-link").click();
        $("#login-input").setValue("admin");
        $("#password-input").setValue("admin");
        $("#sign-in-button").click();
    }

    @Test
    public void greetTest() {
        $("#greeting").shouldHave(text("Привет, admin!"));
    }

    @Test
    public void logoutTest() {
        $("#auth-links").click();
        $("#greeting").shouldHave(text("Привет!"));
    }

    @Test
    public void onPhonePageTest() {
        $("#phone-link").click();
        $("#app-phone-form").exists();
    }

    @Test
    public void addPhoneTest() {
        $("#phone-link").click();
        $("#name-input").setValue("admin");
        $("#phone-input").setValue("88005553535");
        $("#submit-phone").click();
        $("#phone-list").exists();
    }
}

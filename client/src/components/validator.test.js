import {validatePhone, validateName, validatePassword, validateLogin} from "./validators";

function good(validator) {
    return (value) => {
        expect(validator(value).isGood).toBeTruthy()
    }
}

function bad(validator) {
    return (value) => {
        expect(validator(value).isGood).toBeFalsy()
    }
}

describe('login validation', () => {
    const goodLogin = good(validateLogin)
    const badLogin = bad(validateLogin)

    it('bad_login', () => {
        badLogin('');
        badLogin("aba");
        badLogin("aba.cabadaba");
        badLogin("asdfadfadasdlasidalsdfugasdghfalsdhjgf");
        badLogin("badlogin@()")
    })

    it('good_login', () => {
        goodLogin("goodlogin");
        goodLogin("moderator");
        goodLogin("admin");
    })
})

describe ('password validation', () => {
    const goodPassword = good(validatePassword)
    const badPassword = bad(validatePassword)

    it('bad password', () => {
        badPassword("small");
        badPassword("better\npassword");
        badPassword(null);
        badPassword(undefined);
    })

    it ('good password', () => {
        goodPassword("iamthegoodpassword");
        goodPassword("and i am too");
        goodPassword("mybirthdayis11101999");
        goodPassword("aaaaaaaa");
    })
})

describe ('name validation', () => {
    const goodName = good(validateName)
    const badName = bad(validateName)

    it ('bad name', () => {
        badName("aba\ncaba");
        badName("--O-O--");
        badName("!myname!");
        badName("");
        badName(null);
        badName(undefined);
    })

    it ('good name', () => {
        goodName("Vladimir Vladimirovich Putin");
        goodName("My first name");
        goodName("my last name");
    })
})

describe ('phone validation', () => {
    const goodPhone = good(validatePhone)
    const badPhone = bad(validatePhone)

    it ('bad phone', () => {
        badPhone("myphone");
        badPhone(null);
        badPhone(undefined);
        badPhone("123");
        badPhone("123412341234");
        badPhone("1234abacab4");
    })

    it ('good phone', () => {
        goodPhone("88005553535");
        goodPhone("12345678900");
        goodPhone("12673459172");
    })
})
/**
 * Created by Bayview on 2018/3/2.
 */

webix.ui({
    view: "window",
    position: "center",
    width: 400,
    height: 300,
    head: "用户登录",
    model: true,
    body: {
        id: "userlogin",
        view: "form",
        elements: [
            {view: "text", label: "用户名", name: "username", labelWidth: 100},
            {view: "text", label: "密码", name: "password", type: "password", labelWidth: 100},
            {
                view: "button", value: "登录", click: function () {
                var values = $$("userlogin").getValues();
                $.ajax({
                    method:"post",
                    url: "/user/login",
                    data: JSON.stringify(values),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                        if (data.length > 0) {
                            window.location.href = "/"
                        } else {
                            webix.message("用户名或密码错误","error",4000)
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            }
            }]
    }
}).show();
/**
 * Created by Bayview on 2018/3/2.
 */
var id = webix.uid();

function load() {
    $.ajax(
        {
            url:"/user/alls",
            method:"post",
            success:function (data) {
                $$(id).clearAll();
                var index = 1;
                data.forEach(function (cell) {
                   cell.idx = cell.id;
                   cell.id = index++;
                });
                $$(id).parse(data);
            }
        }
    )
}

function add() {
    var formId = webix.uid();
    webix.ui({
        view:"window",
        model:true,
        position:"center",
        head:"添加用户",
        body:{
            id:formId,
            view:"form",
            elements:[
                {view:"text",name:"username",label:"用户名",labelWidth:60},
                {view:"text",name:"password",label:"密码",labelWidth:60},
                {view:"button",value:"添加",click:function () {
                    var values = $$(formId).getValues();
                    $.ajax({
                        url:"/user/insert",
                        method:"post",
                        data:JSON.stringify(values),
                        dataType:"json",
                        contentType: "application/json; charset=utf-8",
                        success:function (data) {
                            load();
                            $$(formId).getParentView().close();
                        }
                    })
                }}
            ]
        }
    }).show();
}

function update() {
    var formId = webix.uid();
    var data = $$(id).getSelectedItem();
    if(!data){
        webix.message("请选中一条数据再修改","error",4000);
        return;
    }
    webix.ui({
        view:"window",
        model:true,
        position:"center",
        head:"添加用户",
        body:{
            id:formId,
            view:"form",
            elements:[
                {view:"text",name:"username",label:"用户名",labelWidth:60,value:data.username},
                {view:"text",name:"password",label:"密码",labelWidth:60,value:data.password},
                {view:"button",value:"修改",click:function () {
                    var values = $$(formId).getValues();
                    webix.extend(data,values,true);
                    data.id = data.idx;
                    $.ajax({
                        url:"/user/update",
                        method:"post",
                        data:JSON.stringify(data),
                        dataType:"json",
                        contentType: "application/json; charset=utf-8",
                        success:function () {
                            load();
                            $$(formId).getParentView().close();
                        }
                    })
                }}
            ]
        }
    }).show()
}

function remove() {
    var data = $$(id).getSelectedItem();
    if(!data){
        webix.message("请选中一条数据再修改","error",4000);
        return;
    }
    data.id = data.idx;
    webix.confirm({
        text:"是否删除选中用户",
        callback:function (r) {
            if(r){
                $.ajax({
                    url:"/user/delete",
                    method:"post",
                    data:JSON.stringify(data),
                    contentType: "application/json; charset=utf-8",
                    success:function (data) {
                        load();
                    },error:function (data) {
                        load();
                    }
                })
            }
        }
    })
}
webix.ui({
    container:"root",
    rows:[
        {
            view:"toolbar",
            cols:[
                { view:"button", value:"加载", width:100,click:load},
                { view:"button", value:"添加", width:100,click:add},
                { view:"button", value:"删除", width:100,click:remove},
                { view:"button", value:"修改", width:100,click:update},
            ],
        },{
            id:id,
            view:"datatable",
            columns:[
                {id:"username",header:"用户名",width:200},
                {id:"password",header:"密码",width:200}
            ],
            select:"row",
            data:[],
            ready:function () {
                load();
            }
        }
    ]
});
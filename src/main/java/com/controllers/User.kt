package com.controllers

import com.models.User
import com.services.UserDaoImp
import org.bson.types.ObjectId
import org.springframework.web.bind.annotation.*

/**
 * Created by Bayview on 2018/3/1.
 */
@RestController
@RequestMapping("/user")
class User(private var user: UserDaoImp){
    @RequestMapping("/find/{username}")
    fun find(username:String) = user.findByUserName(username)

    @PostMapping("/alls")
    fun  alls()= user.allUsers()

    @PostMapping("/delete")
    fun remove(@RequestBody _user:User) = user.remove(ObjectId(_user.id.toString()))

    @PostMapping("/update")
    fun update(@RequestBody _user:User)= user.update(_user)

    @PostMapping("/login")
    fun login(@RequestBody _user:User) = user.login(_user)

    @PostMapping("/insert")
    fun insert(@RequestBody _user:User)= user.insert(_user)
}
package com

import com.dao.IUserDao
import com.models.User
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner

/**
 * Created by Bayview on 2018/3/1.
 */
@RunWith(SpringRunner::class)
@SpringBootTest(classes = arrayOf(Application::class),webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@EnableAutoConfiguration
class UserDao{

    @Autowired
    lateinit var userImpl: IUserDao

    @Test
    fun test(){
        this.insert()
        this.getall()

        var user = User(username = "hello",password = "122")
        var users = userImpl.findByUsernameAndPassword(user.username,user.password)
        println(users.count())
        println(userImpl.delete(users.elementAt(0).id))
    }

    fun insert(){
        var user = User(username = "hello",password = "122")
        print(userImpl.insert(user))
    }

    fun getall(){
        print(userImpl.findAll().count())
    }

}
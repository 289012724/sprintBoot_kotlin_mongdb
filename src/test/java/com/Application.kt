package com

import com.models.User
import com.services.UserDaoImp
import org.junit.Assert
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.test.context.junit4.SpringRunner

/**
 * Created by Bayview on 2018/3/1.
 */
@RunWith(SpringRunner::class)
@SpringBootTest(classes = arrayOf(Application::class),webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@EnableAutoConfiguration
class Application{

    @Autowired
    lateinit var testRetTemplate:TestRestTemplate

    fun index(){
        var result = testRetTemplate.getForEntity("/",String::class.java)
        Assert.assertEquals(200,result.statusCodeValue)
    }
}
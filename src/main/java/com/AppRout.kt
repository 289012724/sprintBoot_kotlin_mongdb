package com

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.ModelAndView

/**
 * Created by Bayview on 2018/3/1.
 */
@RestController
class AppRout{
    @GetMapping("/")
    fun index()=ModelAndView("index")

    @GetMapping("/login")
    fun login()=ModelAndView("loginpage")
}
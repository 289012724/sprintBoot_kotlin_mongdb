package com.services

import com.dao.IUserDao
import com.models.User
import org.bson.types.ObjectId
import org.springframework.stereotype.Service

/**
 * Created by Bayview on 2018/3/1.
 */
@Service
class UserDaoImp(val userDao: IUserDao){
    fun findByUserName(username:String) = userDao.findByUsername(username)
    fun allUsers() = userDao.findAll()
    fun remove(id:ObjectId) = userDao.delete(id)
    fun update(user:User) = userDao.save(user)
    fun login(user:User) = userDao.findByUsernameAndPassword(username = user.username,password = user.password)
    fun insert(user:User)= userDao.insert(user)
}
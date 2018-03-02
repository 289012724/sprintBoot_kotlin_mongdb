package com.dao

import com.models.User
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.stereotype.Repository

/**
 * Created by Bayview on 2018/3/1.
 */
@Repository
interface IUserDao :MongoRepository<User,ObjectId>{
    fun findByUsername(username:String):Iterable<User>
    @Query("{username:?0,password:?1}")
    fun findByUsernameAndPassword(username: String,password:String):Iterable<User>
}
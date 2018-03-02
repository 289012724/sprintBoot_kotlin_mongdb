package com.models

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
/**
 * Created by Bayview on 2018/3/1.
 */
@Document
data class User(@Id val id:ObjectId?= ObjectId.get(), val username:String ="", val password:String="", val department:Int =1)
Table users as U {
  id int [pk, increment]
  fullName varchar
  email varchar
  password varchar
  createdAt timestamp
}

Table users_tweets as UT {
  userId int [ref: > users.id]
  tweetId int [ref: - tweets.id]
  classificationId int [ref: - classifications.id]
}

Table tweets {
  id int [pk] // ID referente a API do Twitter
  message varchar
}

//
// Positivo, neutro ou negativo
//
Table classifications {
  id int [pk, increment]
  value varchar
}
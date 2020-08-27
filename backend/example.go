package main

import "github.com/gin-gonic/gin"

// On windows go to localhost:8080/ping to get the message "pong"
// This is really just proof of concept
func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run()
}

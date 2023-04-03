package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/asher/controller"
	"github.com/gorilla/mux"
)

func main() {
	fmt.Println("Hello from Master")

	r := mux.NewRouter()

	r.HandleFunc("/GetAgents", controller.GetAgents).Methods("GET")
	r.HandleFunc("/NetworkScanning", controller.GetNetworkClinet).Methods("GET")
	r.HandleFunc("/GetDockerStats", controller.GetDockerStats).Methods("GET")

	log.Fatal(http.ListenAndServe(":8089", r))
}

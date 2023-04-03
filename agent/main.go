package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/asher/controller"
	"github.com/gorilla/mux"
)

func main() {
	fmt.Println("Hello from Agent")

	r := mux.NewRouter()

	r.HandleFunc("/getMemoryUsage", controller.GetMemoryUsage).Methods("GET")
	r.HandleFunc("/getLocalIp", controller.GetLocalIp).Methods("GET")
	r.HandleFunc("/getCpuUsage", controller.GetCpuUsage).Methods("GET")
	r.HandleFunc("/getPs", controller.GetPs).Methods("GET")
	r.HandleFunc("/GetTemperature", controller.GetTemperature).Methods("GET")
	r.HandleFunc("/GetPcInfo", controller.GetPcInfo).Methods("GET")
	r.HandleFunc("/GetDiskInfo", controller.GetDiskInfo).Methods("GET")
	r.HandleFunc("/GetDockerStats", controller.GetDockerStats).Methods("GET")
	log.Fatal(http.ListenAndServe(":8081", r))
}

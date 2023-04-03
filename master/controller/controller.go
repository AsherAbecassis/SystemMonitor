package controller

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/asher/model"
	"github.com/asher/services"
)

func GetDockerStats(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Docker stats endPoint")
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	pclist := []string{"http://192.168.14.42:8081"}

	stats := services.GetDockerStatsServices(pclist[0])

	json.NewEncoder(w).Encode(stats)
}

func GetAgents(w http.ResponseWriter, r *http.Request) {
	fmt.Println("GetAgents endPoint")
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	// var agent = []model.Agent{

	// 	{
	// 		Ip:   "http://localhost:8081",
	// 		Host: "A1",
	// 	},
	// }

	pclist := []string{"http://192.168.14.42:8081"}

	var infoList []model.InfoStat

	for _, v := range pclist {

		res := services.GetHostInfo(v)
		infoList = append(infoList, *res)
	}

	json.NewEncoder(w).Encode(infoList)

}

func GetNetworkClinet(w http.ResponseWriter, r *http.Request) {

	services.NetworkScanning()

}

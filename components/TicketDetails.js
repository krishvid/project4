import { StyleSheet, Text, View, FlatList } from "react-native";



const data = [{
    username:"John",
    depatureTime: "1400",
    depatureDate: "07/10/2023",
    returnTime:"1800",
    returnDate:"07/10/2023",
    destinationFrom: "Melaka",
    destinationTo: "Kuala Lumpur",
    seatNo: 9,
    price: 15,
},
{
    username:"Rachel",
    depatureTime: "1100",
    depatureDate: "07/12/2023",
    returnTime:"1500",
    returnDate:"09/10/2023",
    destinationFrom: "Ipoh",
    destinationTo: "Kuala Lumpur",
    seatNo: 19,
    price: 17,
},
]


export function TicketDetails() {

    function Details({itemData}){
        return <View style={{flex:1}}>
            <Text>{itemData.username}</Text>
        </View>

    }
    

    return <View style={{flex:1}}>
        <Text>Ticket Details</Text>
        <FlatList
        data={data}
        keyExtractor={(_,item)=>item}
        renderItem={({item})=><Details itemData={item}/>}
        />

        {/* <TicketBooking /> */}
    </View>
}
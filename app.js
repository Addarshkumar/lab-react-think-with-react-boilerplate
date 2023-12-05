let cont=document.getElementById("react-container");
// cont.innerText="hello ,welcome to react"


// ReactDOM.render("hello , welcome to react" , cont)

// let h1 =document.createElement("h1")
// h1.innerHTML="welcome to react"
// cont.append(h1)

// let h1=React.createElement(`h1`,null,"hello",React.createElement(`div`,null,"hello welcome to react"))
// ReactDOM.render(h1,cont)

// iteration2


// function Container(){
//     return React.createElement(`p`,null,`Hey Kalvians! Welcome to React Learning`,
//     React.createElement(`div`,null,`Let's rock and roll`)
//     );
// }

// ReactDOM.render(Container(),cont)



// iteration 3


class kalvian extends React.Component{
    render(){
        return React.createElement(`p`,null,`Hey Kalvians`,
        React.createElement(`div`,null,`Let's rock and roll with classes`)
        );
    }
}

ReactDOM.render(React.createElement(kalvian),cont);






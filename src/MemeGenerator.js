import React from 'react'

class MemeGenerator extends React.Component {

	constructor(){
		super()
		this.state ={
			topText: "",
			bottomText: "",
			randomImage: "http://i.imgflip.com/1bij.jpg",
			allImgs: []
		}
		// this.componentDidMount = this.componentDidMount.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
		.then(response => response.json())
		.then(imgs => {
			const{memes} = imgs.data
			this.setState({
				allImgs: memes
			})
		})
	}
	handleChange(event) {
		const{name, value} = event.target
		this.setState({[name]: value})
	}

	handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allImgs.length)
        const randMemeImg = this.state.allImgs[randNum].url
		this.setState({randomImage : randMemeImg})

	}
	render(){
		return (
			<div> 
            <form className ="meme-form" onSubmit={this.handleSubmit}>
            <input type= "text" value={this.state.topText} onChange={this.handleChange} name="topText" placeholder="topText" />
             <input type= "text" value={this.state.bottomText}onChange={this.handleChange} name="bottomText" placeholder="bottomText" />
            <button>Generate</button>
            </form>
            <div class="meme">
            <img src={this.state.randomImage} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>

             </div>
            
			</div>
        
			)

	}

}
export default MemeGenerator
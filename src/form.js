import React , {Component} from 'react';

class Form extends Component{
	constructor(props){
		super(props)
			this.state={
				name:'',
				lname:'',
				address:'',
				loader:false
			
		}
	}
	change = e => {
		this.setState({
		[e.target.name] : e.target.value
		})
		
	}
	 submit = e => {
		// alert(`${this.state.name}..................${this.state.address}`)
		 this.setState({
			loader : true
		})
		e.preventDefault()
		setTimeout(function () {
            alert("Form Submited Successfully");
            this.setState({loader : false})
    }.bind(this), 2000);

		
		
	}

		render(){
			const loading = this.state.loader;
			// var loader="";
			// if (loading) {
		 //      loader = <img src="giphy.gif"/>;
		 //    } else {
		 //      loader=""
		 //    }
		return(
			
			<div className="">
			<img src="logoSmall.png"/>
			<h1 className="heading">This is Blue Frog Task</h1>
				<form onSubmit={this.submit} className="formsubmit">
					<div className="formdec">
					<label className="heading">Name</label>
					<input type='text' name='name' value={this.state.name} onChange={(e)=> this.change(e)}/><br/><br/>

					<label className="heading">Last Name</label>
					<input type='text' name='lname' value={this.state.lname} onChange={(e)=> this.change(e)}/><br/><br/>

					<label className="heading">Address</label>
					<textarea name='address' value={this.state.address} onChange={this.change}>
					</textarea><br/>

					<button type='submit'>Submit</button>
					</div>
				</form>
				
				 {loading ? <img src="loader.gif" className="loader"/> : <p />}

			</div>


		)
	}
}
export default Form

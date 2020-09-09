import React from 'react';
import{ init } from 'emailjs-com';
init("user_xbwfslpPeltgsBuPWHmHE");

export class Hire extends React.Component {
  constructor(props) {
	super(props);
	this.state = { 
        text: '', 
        name: '', 
        email: '' };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (

        <div className="Hire">

            <h1 className="Hire_title" >Book your call.</h1>
            
            <div className="blabla_container">
            <br/>
            <div className="Hire_text">Hey there! <span role="img" aria-label="hello wave">👋</span><br/><br/>

            You feel like I could be a good candidate for your company or the right person to build your digital product? Great!<br/><br/>
            
            Please send me an email, we’ll organize a call when it best fits for you and tailor design, delivery and price around your needs.<br/><br/>
            
            Write also in the email a desired date and time, I usually can manage a call the same day too!</div>
            </div>




            <div className="form">
                <form className="mailing">
                    
                        <div className="inputNlabel">
                        <label for="name_input">name:</label>
                        <input type="text" id="name_input" placeholder="Your name ..." onChange={this.handleNameChange} value={this.state.name}/>
                        </div>
                            
                        <div className="inputNlabel">
                        <label for="email_input">email:</label>
                        <input type="email" id="email_input" placeholder="Your email ..." onChange={this.handleEmailChange} value={this.state.email}/>
                        </div>

                        <textarea
                            id="text_area"
                            className="text_area"
                            name="test-mailing"
                            onChange={this.handleTextChange}
                            placeholder="Your message ..."
                            required
                            value={this.state.text}
                            
                        ><label for="text_area">message:</label></textarea>
                    
                    <input type="button" value="SEND" className="submit" onClick={this.handleSubmit} />
                </form>
            </div>
        </div>


        



	)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }

  handleTextChange(event) {
    this.setState({text: event.target.value})
  }

  handleSubmit (event) {
    const templateId = 'bookdacall';
    

    this.sendFeedback(templateId, {message_html: this.state.text, from_name: this.state.name, reply_to: this.state.email})

    this.setState({
        name: "",
        email: "",
        text: "",
    })
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
        'default_service' , templateId,
  	variables
  	).then(res => {
        console.log('Email successfully sent!')
        alert('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

}
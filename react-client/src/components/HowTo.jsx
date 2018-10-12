import React from "react";
import Header from './Header';
import { Component } from 'react';
import $ from 'jquery';


class HowTo extends Component {

    
    componentDidMount() {
        document.title = 'How was made it'
    }


    hover(e) {
        e.target.classList.add('bg-info');
        e.target.style.cursor = 'hand';
        e.target.style.transition = "200ms ease-out";
    }
    
    leave(e) {
        e.target.style.cursor = 'pointer';
        e.target.classList.remove('bg-info');
    }
    
    
    click(e) {
        $(e.target).animate({
            height: '400px'
        }, 700, function (e) {
            $(this).addClass('bg-light')
            $(this).find('button').addClass('position-absolute fixed-bottom m-3 d-block');
            $(this).find('p').addClass('position-absolute m-3 d-block bg-light');
            $(this).find('button').click(
                function () {
                    $(this).closest('li').css('height', '50px');
                    $(this).closest('li').children().removeClass('d-block');
                    $(this).parent().removeClass('bg-light bg-info')
                }
            )
        });
    }
        


    render() {

        const liStyle = {
            minHeight: 50 + 'px'
        }
        return (
            <div className="container-fluid w-75">
                <Header tagline="what questions do you have?" />
                <ul className="list-group">
                    <li style={liStyle} onClick={this.click} onMouseOver={this.hover} onMouseLeave={this.leave} className="list-group-item">Where is my data being stored?
                    <p className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea, accusamus necessitatibus deserunt dolores soluta omnis quia debitis accusantium magni reiciendis eum, similique minima rem doloremque voluptatibus ullam adipisci. Officia amet magni quisquam eligendi excepturi ullam minima, ut dolorem ad.</p>
                    <button className="btn-how-to btn btn-outline-primary d-none">close</button>
                    </li>
                    <li onClick={this.click} onMouseOver={this.hover} onMouseLeave={this.leave} className="list-group-item">What if i don't fulfill my tasks on the todo list?
                    <p className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea, accusamus necessitatibus deserunt dolores soluta omnis quia debitis accusantium magni reiciendis eum, similique minima rem doloremque voluptatibus ullam adipisci. Officia amet magni quisquam eligendi excepturi ullam minima, ut dolorem ad.</p>
                    <button className="btn-how-to btn btn-outline-primary d-none">close</button>
                    </li>
                    <li onClick={this.click} onMouseOver={this.hover} onMouseLeave={this.leave} className="list-group-item">How you deal with deadlines?
                    <p className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea, accusamus necessitatibus deserunt dolores soluta omnis quia debitis accusantium magni reiciendis eum, similique minima rem doloremque voluptatibus ullam adipisci. Officia amet magni quisquam eligendi excepturi ullam minima, ut dolorem ad.</p>
                    <button className="btn-how-to btn btn-outline-primary d-none">close</button>
                    </li>
                </ul>
            </div>
        )
    }
}





export default HowTo;

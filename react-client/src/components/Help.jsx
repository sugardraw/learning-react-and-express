import React from "react";
import Header from './Header';
import { Component } from 'react';
import $ from 'jquery';


class Help extends Component {
    componentDidMount() {
        document.title = 'FAQ Page'
    }

    hover(e) {
        console.log('working!');
        e.target.classList.add('bg-info');
        e.target.style.transition = "200ms ease-out";
    }

    leave(e) {
        e.target.classList.remove('bg-info');

    }

    click(e) {

        $(e.target).animate({
            height: '400px'
        }, 700, function () {
            $(this).find('button').toggleClass('position-absolute fixed-bottom m-3 d-block');
            $(this).find('p').toggleClass('position-absolute m-3 d-block');
            $(this).find('button').click(
                function () {
                    $(this).closest('li').css('height', '50px');
                    $(this).closest('li').children().removeClass('d-block');
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
                    <button className="btn btn-outline-primary d-none">close</button>
                    </li>
                    <li onClick={this.click} onMouseOver={this.hover} onMouseLeave={this.leave} className="list-group-item">What if i don't fulfill my tasks on the todo list?
                    <p className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea, accusamus necessitatibus deserunt dolores soluta omnis quia debitis accusantium magni reiciendis eum, similique minima rem doloremque voluptatibus ullam adipisci. Officia amet magni quisquam eligendi excepturi ullam minima, ut dolorem ad.</p>
                    <button className="btn btn-outline-primary d-none">close</button>
                    </li>
                    <li onClick={this.click} onMouseOver={this.hover} onMouseLeave={this.leave} className="list-group-item">How you deal with deadlines?
                    <p className="d-none">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ea, accusamus necessitatibus deserunt dolores soluta omnis quia debitis accusantium magni reiciendis eum, similique minima rem doloremque voluptatibus ullam adipisci. Officia amet magni quisquam eligendi excepturi ullam minima, ut dolorem ad.</p>
                    <button className="btn btn-outline-primary d-none">close</button>
                    </li>
                </ul>
            </div>
        )
    }
}





export default Help;

import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                
            <Card
                src="https://news.yale.edu/sites/default/files/styles/horizontal_image/public/doctor-patient-relationship.jpg?itok=Wh0XAjma&c=b34d959e670923cd301a7c2d34f9c8c9"
                title="Doctors"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/insurance-vedio-template-design-9f69a92165e10a33c67c128b7186aa0a_screen.jpg?ts=1637652704"
                title="Insurance"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://thumbs.dreamstime.com/b/road-to-school-nature-scene-illustration-194696695.jpg"
                title="Education"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://accountingclassrwanda.com/wp-content/uploads/2021/11/Jobs-Photo-at-Accountingclassrwanda.com-.jpg"
                title="Jobs"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://peachtree-station.com/wp-content/uploads/2019/03/facial.png"
                title="Personal Care"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="http://residencestyle.com/wp-content/uploads/2019/12/Focus-on-Lighting.jpg"
                title="Restaurant"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
        </div>
    )
}

export default Home

const myData =  [
	{ source: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720", title: "Online Experiences", description: "Unique activities we can do together, led by a world of hosts."},
    { source: "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720", title: "Unique stays", description: "Spaces that are more than just a place to sleep."},
    { source: "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720", title: "Entire homes", description: "Comfortable private places, with room for friends or family."},
    { source: "https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg", title: "3 Bedroom Flat in Bournemouth", description: "Superhost with a stunning view of the beachside in Sunny Bournemouth", price: "£130/night"},
    { source: "https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg", title: "Penthouse in London", description: "Enjoy the amazing sights of London with this stunning penthouse", price: "£350/night"},
    { source: "https://media.nomadicmatt.com/2018/apartment.jpg", title: "1 Bedroom apartment", description: "Superhost with great amenities and a fabolous shopping complex nearby", price: "£70/night"}

	
];

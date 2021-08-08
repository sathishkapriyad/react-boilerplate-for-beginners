import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'The rise of never-ending job interviews',
        image:
            'https://ychef.files.bbci.co.uk/1600x900/p09qkg2l.webp',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'very jobseeker welcomes an invitation to a second interview, because it signals a company’s interest. A third interview might feel even more positive, or even be the precursor to an offer. But what happens when the process drags on to a fourth, fifth or sixth round – and it’s not even clear how close you are to the ‘final’ interview? ',
    },
    {
        id: 'm2',
        title: 'Bristol Balloon Fiesta: Mass launch from secret site',
        image:
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/946D/production/_119779973_balloon3.png',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'The event was organised following the cancellation of the annual Bristol International Balloon Fiesta due to the pandemic.About 30 balloons launched from 06:30 BST from a location that was kept under wraps to prevent crowds from gathering.',
    },
]

const AllMeetups = () => {
    return (
        <section>
         <center> <h1>All Meetups</h1></center>
          <MeetupList meetups={DUMMY_DATA}/>
        </section>
    )
}

export default AllMeetups

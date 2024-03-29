
import woohooSmiley from '../../components/Assets/woohoo_smiley.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navOverviewActive from '../../components/Assets/nav_overview_active.png'

import smileySmiley from '../../components/Assets/smiley_smiley.png'
import remind from '../../components/Assets/remind.png'


import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navExpenseDefault from '../../components/Assets/new_expense_default.svg'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { collection, onSnapshot, query, } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../store/slices/items";
import { motion } from "framer-motion"

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    datasets: [
        {
            data: [0, 1],
            backgroundColor: [
                '#c2a6ff',
                'rgba(255, 255, 255, 0.2)',
            ],
            borderWidth: 0
        },
    ],
};
  
const options = {
    cutout: "87%",
    elements: {
        center: {
            text: 'Red is 2/3 the total numbers',
            color: '#FF6384', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            sidePadding: 20, // Default is 20 (as a percentage)
            minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25 // Default is 25 (in px), used for when text wraps
        },
    },
};

export const FriendsInDebt = () => {

    const dispatch = useDispatch();
  
    const [allItems, setAllItems] = useState([])
  
    useEffect(() => {
      const q = query(collection(db, "Groups"))
      onSnapshot(q, querySnapshot => {
        setAllItems([])
        querySnapshot.forEach(doc => {
          setAllItems(prevAllItems => [
            ...prevAllItems,
            doc.data()
          ])
        })
      })
    }, [])
  
    useEffect(() => {
      dispatch(update(allItems))
    })
  
    console.log(allItems)

    return (
        <>
            <motion.div 
                className="container containerHeight gradientContainerCB"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {duration: 0.1} }}
                exit={{ opacity: 0, transition: {duration: 0.1} }}
            >
                <div className="row justify-content-center">
                    <div className="col mt-4 mb-3 mx-3 d-flex justify-content-center align-items-center">
                        <h1 className="h6 bold white">Overview</h1>
                    </div>
                    <div className='d-flex justify-content-center'>
                    <Link to='/'>
                        <button className='overviewButtons'>Your Balance</button>
                    </Link>
                        <button className='overviewButtonsActive'>Friends in Debt</button>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div style={{height:'231px',width:'231px'}}>
                            <Doughnut data={data} options={options} width={231} height={231} className='doughnutGraph' />
                        </div>
                        <div className='doughnutTextOverview'>
                            <p className='text-center white h1 bold'>$0.00</p>
                            <p className='text-center white largeCopy demiBold lineHeight64'>Others owe you</p>
                            <p className='text-center white smallCopy demiBold lineHeight64'>in 1 group</p>
                        </div>
                    </div>
                </div>
                <div className="row pageTab mt-5 pb-5">
                    <div className="col pt-3 px-4">
                        <div>
                            <div className='expenseSection mt-2'>
                                <div className='d-flex justify-content-between align-items-center mb-3'>
                                    <h2 className='h3 bold' id="othersOweYou">Others owe you</h2>
                                </div>
                            </div>
                            <div className ='card'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <div className='d-flex align-items-center'>
                                        <div className='groupsCardImg'>
                                        <img src={smileySmiley} className="memberIcons" alt="member1" />
                                            <span className="placeholder"></span>
                                        </div>
                                        <div className='ms-2'>
                                            <h1 className="h4 bold" id="cardGroupName">Roomies</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className ='d-flex align-items-center justify-content-between'>
                                    <div class="col">
                                        <h2 className="h2 bold">$10.90</h2>
                                        <p className="p demiBold">Megan owes you</p>
                                    </div>
                                    <div class="groupsCardButton">
                                        <button className='bold' id="remind"><img src={remind} className="remind" alt="remind"/>Remind</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className ='card mt-3'>
                            <div className='card-body'>
                                <div className='d-flex align-items-center justify-content-between mb-2'>
                                    <div className='d-flex align-items-center'>
                                        <div className='groupsCardImg'>
                                        <img src={smileySmiley} className="memberIcons" alt="member1" />
                                            <span className="placeholder"></span>
                                        </div>
                                        <div className='ms-2'>
                                            <h1 className="h4 bold" id="cardGroupName">Roomies</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className ='d-flex align-items-center justify-content-between'>
                                    <div class="col">
                                        <h2 className="h2 bold">$5.90</h2>
                                        <p className="p demiBold">Parker owes you</p>
                                    </div>
                                    <div class="groupsCardButton">
                                        <button className='bold' id="remind"><img src={remind} className="remind" alt="remind"/>Remind</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="navbar">
            <div className="navStack active">
                <Link to='/' className="bold d-flex flex-column align-items-center">
                    <img src={navOverviewDefault} className="navIcons" alt="overview" />
                    <img src={navOverviewActive} className="navIcons" alt="overview" id="active" />
                    Overview
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/monthlyNetTotal' className="bold d-flex flex-column align-items-center">
                <img src={navMonthlyDefault} className="navIcons" alt="monthly" />
                Monthly
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/allGroups' className="bold d-flex flex-column align-items-center">
                    <img src={navExpenseDefault} className="navIcons" alt="expense" />
                    Expense
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/groups' className="bold d-flex flex-column align-items-center">
                    <img src={navGroupsDefault} className="navIcons" alt="groups" />
                    Groups
                </Link>
            </div>
            <div className="navStack">
                <Link to='/pages/profile' className="bold d-flex flex-column align-items-center">
                    <img src={navProfileDefault} className="navIcons" alt="profile" />
                    Profile
                </Link>
            </div>
        </div> 
                   
        </>
    )
}
import backArrow from '../../components/Assets/Back arrow.png'
import backArrowWhite from '../../components/Assets/backArrowWhite.png'
import optionsIcon from '../../components/Assets/optionsDots.png'
import navOverviewDefault from '../../components/Assets/nav_overview_default.png'
import navMonthlyDefault from '../../components/Assets/nav_monthly_default.png'
import navMonthlyActive from '../../components/Assets/nav_monthly_active.png'
import navExpenseDefault from '../../components/Assets/new_expense_default.svg'
import navGroupsDefault from '../../components/Assets/nav_groups_default.png'
import navProfileDefault from '../../components/Assets/nav_profile_default.png'
import smileySmiley from '../../components/Assets/smiley_smiley.png'
import monthlyArrow from '../../components/Assets/monthlyArrow.png'
import monthlySwipe from '../../components/Assets/monthlySwipe.png'
import optionsIconWhite from '../../components/Assets/optionsIconWhite.png'
import dropDownArrow from '../../components/Assets/dropDownArrow.png'
import { Link, useNavigate } from 'react-router-dom';

export const MonthlyTotalGain = () => {

    return (
        <>
        <div className="gradientContainer">
            <div className="row">
                <div className="col mt-4 mb-2 mx-3 d-flex justify-content-between">
                    <span id="nav"></span>
                    <h1 className="h6 bold" id="monthly">Monthly</h1>
                    <img src={optionsIconWhite} alt="back" className="topNavOptionsWhite" />
                 </div>

                <div className='d-flex flex-column align-items-center'>
                    <p className="p demiBold mb-2" id="netTotal">Entertainment</p>
                    <h2 className="h2 bold" id="netTotalNumber">$17.12</h2>

                    <h4 className="h4 bold" id="totalSpend">Total Gains - $69.26</h4>


                    {/* <img src={monthlySwipe} alt="back" className="monthlySwipe" /> */}
                    {/* Monthly swipe arrow */}
    
                   
                </div>
            </div>
        

            <div className="pageTab">
                <div className="col px-4">
                        <h4 className="h4 bold pt-4 pb-4" id="transactionsHeader">Category <img src={dropDownArrow} alt="down" className="dropDownArrow" /></h4>
                            <div className="d-flex flex-column" id="monthlyCard">
                                <div className="d-flex justify-content-between">
                                    <div className="transactionInfo d-flex flex-column justify-content-center">
                                        <p className="p demiBold" id="youPaid">Megan paid you</p>
                                        <h2 className="h2 bold" id="monthlyAmount">+$17.12</h2>
                                    </div>
                                </div>

                                <div className="transactionInfo d-flex flex-row justify-content-between">
                                    <div className="tag">
                                        <p className="p demiBold" id="entertainmentTag">Entertainment</p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-right">
                                    <h6 className="h6 bold" id="monthlyDate">10/28/22</h6>
                                    <p className="p demibold" id="viewGroup">View Payback Gang<img src={monthlyArrow} className="monthlyArrow" alt="monthlyArrow" /></p>    
                                    </div>
                                </div>
                            </div>


                            
                    </div>

                </div>
            </div>

            <div className="navbar">
                <div className="navStack">
                    <Link to='/' className="bold d-flex flex-column align-items-center">
                        <img src={navOverviewDefault} className="navIcons" alt="overview" />
                        Overview
                    </Link>
                </div>
                <div className="navStack active">
                    <Link to='/pages/monthlyNetTotal' className="bold d-flex flex-column align-items-center">
                    <img src={navMonthlyDefault} className="navIcons" alt="monthly" />
                    <img src={navMonthlyActive} className="navIcons" alt="monthly" id="active" />
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
    );

}
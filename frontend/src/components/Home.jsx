import bp1 from '../assets/bp1.jpg'
import bs1 from '../assets/bs1.jpg'
import wbm1 from '../assets/wbmi1.jpg'
import step1 from '../assets/step1.jpg'
import water1 from '../assets/water1.jpg'
export const Home = () => {
    return (
        <>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mx-2">
                    {/* Start item */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5" >
                        <img className="w-full" src={bp1} alt="BP1" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Blood pressure</div>
                            <p className="text-gray-700 text-base">
                                In 2017, the American College of Cardiology and the American Heart Association published new guidelines for hypertension management and defined high hypertension as a blood pressure at or above 130/80 mmHg. Stage 2 hypertension is defined as a blood pressure at or above 140/90 mmHg.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href='/insights' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Track your Blood Pressure</a>
                        </div>
                    </div>
                    {/* End Item */}
                    {/* Start item */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5" >
                        <img className="w-full" src={bs1} alt="BP1" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Blood sugar</div>
                            <p className="text-gray-700 text-base">
                                Blood glucose, or blood sugar, is the main sugar found in your blood. It is your body's primary source of energy. It comes from the food you eat. Your body breaks down most of that food into glucose and releases it into your bloodstream. When your blood glucose goes up, it signals your pancreas to release insulin. Insulin is a hormone that helps the glucose get into your cells to be used for energy.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 flex items-end">
                            <a href='/insights' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Track your Blood Sugar</a>
                        </div>
                    </div>


                    {/* End Item */}
                    {/* Start item */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5" >
                        <img className="w-full" src={wbm1} alt="BP1" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Weight & BMI</div>
                            <p className="text-gray-700 text-base">
                                The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight status while taking age into consideration. Use the "Metric Units" tab for the International System of Units or the "Other Units" tab to convert units into either US or metric units.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 ">
                            <a href='/insights' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Track your weight and BMI</a>
                        </div>
                    </div>
                    {/* End Item */}
                    {/* Start item */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5" >
                        <img className="w-full h-[200px]" src={water1} alt="BP1" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Water Reminder</div>
                            <p className="text-gray-700 text-base">
                                Drinking water is vital for our bodies to function at their best. It helps maintain a balance of bodily fluids, supports digestion, and regulates body temperature. By staying hydrated, we can improve our energy levels, focus, and overall health.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 flex items-end">
                            <a href='/insights' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Track your water consomption</a>
                        </div>
                    </div>
                    {/* End Item */}
                    {/* Start item */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5" >
                        <img className="w-full h-[200px]" src={step1} alt="BP1" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Step counter</div>
                            <p className="text-gray-700 text-base">
                                Walking, a simple yet powerful exercise, offers multiple benefits. It booster cardiovascular health by elevating heart rate and circulation, reducing the risk of heart diseases. Not only does it aid in weight management by burning calories and boosting metabolism, but it also strengthens muscles, particularly in the lower body, and improves joint health through low-impact movement.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2 ">
                            <a href='/insights' className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Record your steps</a>
                        </div>
                    </div>
                    {/* End Item */}
                </div>
            </div>
            {/* <div className='bg-green-600  rounded-md h-full'>
                <div className='flex justify-between mx-5'>
                     <img src={bp1} alt='BP1' className='w-[50px] h-[50px]' /> 
                    <button className='bg-white p-5 rounded' >Track your health now</button>
                </div>
                <div className='flex justify-between mx-5 bg-gray'>
                    <p>Last report</p>
                    <p>Hisoty {'>'}</p>
                </div>
            </div> */}
        </>
        // <>
        //     <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
        //         <div className="text-center ">
        //             <h1 className="text-4xl font-bold mb-4">Welcome to Health insights</h1>
        //             <p className="text-lg mb-8">
        //                 Record and view your health-related activities and notes easily.
        //             </p>
        //             <div className="flex flex-wrap justify-center">
        //                 <div className="m-4 p-8 bg-white text-black rounded-lg shadow-md flex items-center justify-center">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         className="h-16 w-16 text-blue-500 mr-4"
        //                         viewBox="0 0 20 20"
        //                         fill="currentColor"
        //                     >
        //                         <path
        //                             fillRule="evenodd"
        //                             d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.536 6.464a1 1 0 00-1.415 1.414l2.122 2.122-2.121 2.122a1 1 0 001.415 1.414l2.121-2.122 2.122 2.122a1 1 0 001.414-1.414L9.07 10.001l2.121-2.122a1 1 0 00-1.414-1.414L7.656 8.587 5.536 6.464zM15 10a5 5 0 11-10 0 5 5 0 0110 0z"
        //                             clipRule="evenodd"
        //                         />
        //                     </svg>
        //                     <div>
        //                         <h2 className="text-xl font-bold mb-2">Record Activities</h2>
        //                         <p>Log your exercises, meals, medications, and more.</p>
        //                     </div>
        //                 </div>
        //                 <div className="m-4 p-8 bg-white text-black rounded-lg shadow-md flex items-center justify-center">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         className="h-16 w-16 text-green-500 mr-4"
        //                         viewBox="0 0 20 20"
        //                         fill="currentColor"
        //                     >
        //                         <path
        //                             fillRule="evenodd"
        //                             d="M10 18a8 8 0 100-16 8 8 0 000 16zM9 6a1 1 0 112 0v4a1 1 0 01-2 0V6zm2-2a1 1 0 11-2 0 1 1 0 012 0z"
        //                             clipRule="evenodd"
        //                         />
        //                     </svg>
        //                     <div>
        //                         <h2 className="text-xl font-bold mb-2">View Summary</h2>
        //                         <p>Get insights and summaries of your health activities.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
};

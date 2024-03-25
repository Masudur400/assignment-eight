
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <div className='flex justify-center my-10 items-center bg-gray-100 rounded-xl md:py-20 py-10 '>
            <h3 className="text-4xl font-bold">  Books</h3>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default ListBooks;
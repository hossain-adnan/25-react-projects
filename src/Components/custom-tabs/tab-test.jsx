import Tabs from "./tabs";

function RandomComp() {
    return <div>Content from a random component</div>
}

function handleChange(index) {
    console.log(index);
}

const tabs = [
    {
        label: "Tab 1",
        content: <div>Content of tab 01</div>
    },{
        label: "Tab 2",
        content: <div>Content of tab 02</div>
    },{
        label: "Tab 3",
        content: <RandomComp/>
    }
];

export default function TabsTest() {
    return <Tabs tabContents={tabs} onChange={handleChange}/>
}

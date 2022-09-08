const EnableAlert = ({enableAlert,setEnableAlert}) => {
    return <button className='enable-alert-button' onClick={()=> {setEnableAlert(!enableAlert)}}>
        {enableAlert ? 'Disable Alert after move':'Enable Alert after move'}
    </button>
}

export default EnableAlert
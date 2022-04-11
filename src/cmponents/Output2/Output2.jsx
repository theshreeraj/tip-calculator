import style from './Output2.module.css'
const Output2 = (props)=>{
    return (
        <>
          <div className={style.div2}>
            <div>
          <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.heading1}>Customer</th>
                        <th className={style.heading2}>Tip</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={style.output1}>{props.length} </td>
                    <td className={style.output2}>{props.value} </td>
                    </tr>
                </tbody>
          </table>
        </div>
        <button onClick={props.clickHandle} className={style.Button}>
            Calculate tip and customer
        </button>
        </div>
        <br/> 
        </>
    )
}
export default Output2;
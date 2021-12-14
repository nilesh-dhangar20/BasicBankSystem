
import React, { useEffect, useState } from 'react'

const TransactionHistory = () => {

    const [table, settable] = useState([])
    //     const callhistory = async () => {
    //         try {
    //             const res = await fetch('/transactionhistory');
    //             const data = await res.json();
    //             settable(data);
    //             console.log(data);
    //         }
    //         catch (err) {
    //             console.log(err);
    //         }
    //     }

    // useEffect(() => {

    //     callhistory();

    // })

    useEffect(() => {
        let mounted = true;
        fetch("/transactionhistory")
            .then(res => {
                return res.json();
            }).then(data => {
                if (mounted) {
                    console.log(data);
                    settable(data);

                }

            }).catch((err) => {
                console.log(err);
            })

        return () => {
            mounted = false;
        }
    }, [])

    const formatDate = date => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'Asia/Kolkata',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
        }
        return new Date(date).toLocaleString('en-US', options)
    }
    return (
        <div className="container">
            <table className="table table-hover  table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sender</th>
                        <th scope="col">Reciever</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date and Time</th>

                    </tr>
                </thead>
                {table.map((elem, ind) => {
                    return (
                        <>
                            <tbody key={elem._id} >
                                <tr>
                                    <th scope="row">{ind + 1}</th>
                                    <td key={elem._id + elem.sender + "sender"}>{elem.sender}</td>
                                    <td key={elem._id + elem.reciever + "reciever"}>{elem.reciever}</td>
                                    <td key={elem._id + elem.amount + "amount"}>{elem.amount}</td>
                                    {/* <td key={elem._id + elem.date + "time"}>{elem.date.substring(0,10)+"   "+elem.date.substring(11,19)}</td> */}
                                    <td key={elem._id + elem.date + "time"}>{formatDate(elem.date)}</td>
                                </tr>
                            </tbody>
                        </>
                    )

                })}

            </table>
        </div>
    )
}

export default TransactionHistory

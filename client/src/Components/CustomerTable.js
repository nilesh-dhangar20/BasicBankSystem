import React, { useEffect, useState } from 'react';
import ".././App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function CustomerTable() {
  const [array, setarray] = useState([]);
  const [email, setemail] = useState("");
  const [amount, setamount] = useState(0);
  const [to, setto] = useState("");



  useEffect(() => {
    let mouted = true;
    fetch('/customers').then(res => {
      return res.json();
    }).then(data => {
      if (mouted) {
        setarray(data);
      }
    }).catch((err) => {
      console.log(err);
    })
    return () => {
      mouted = false;
    }
  }, [])
  const selectedOption = ((event) => {
    console.log(event.target.value);
    setto(event.target.value);
  })
  const inputEvent = ((event) => {
    setamount(event.target.value);
  })

  const postData = async (event) => {
    try {
      event.preventDefault();
      const res = await fetch('/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: email,
          to: to,
          amount: amount
        })
      });

      if (!res.ok) {
        window.alert("invalid transactions");
      }
      else {
        window.alert("successfully transaction");
        window.location.replace("/transactions");
      }

    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="container input_customer mt-5">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Balance</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          {array.map((curr, index) => {

            return (
              <>
                <tbody key={curr._id}>
                  <tr key={curr._id + "tr"}>
                    <th scope="row">{index + 1}</th>
                    <td key={curr._id + curr.name + "name"}>{curr.name}</td>
                    <td key={curr._id + curr.last + "last"}>{curr.last}</td>
                    <td key={curr._id + curr.email + "email"}>{curr.email}</td>
                    <td key={curr._id + curr.balance + "balance"}>{curr.balance}</td>
                    <td key={curr._id + "button"}><button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                      setemail(curr.email)
                    }

                    }>Transfer</button></td>
                  </tr>
                </tbody>
              </>
            );
          })}

        </table>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-fullscreen-md-down modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Transaction</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className="form" method="POST">

                  <div className="heading mt-1 pt-2"> <h4>from:  {email}</h4></div>

                  <div>
                    <select aria-label="Default select example" onChange={selectedOption} value={to}>
                      <option selected>Choose reciever</option>
                      {array.map((elem) => {
                        return (
                          <option value={elem.email}>{elem.email}</option>
                        )
                      })}
                    </select>

                  </div>
                  <div className="transaction_card_input mt-2">
                    <input type="number" onChange={inputEvent} value={amount} />
                  </div>
                  <div className="mt-2 mb-2 pb-2 transaction_card_button">
                    <button onClick={postData} className="btn btn-success ">Transfer</button>
                  </div>


                </form>
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default CustomerTable

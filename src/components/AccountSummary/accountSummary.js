import React, { Component } from 'react'

export class AccountSummaryComponent extends Component {
  render() {
    const web3 = this.props
    console.log('[AccountSummaryComponent]', web3.eth)
    /*
    let accounts = web3.eth.getAccounts().then(accounts => {
      console.log("accounts: ", accounts);
    });
*/

    return (
      <div>
        <h3>Account Summary Component</h3>
        <button>Subscribe</button>
      </div>
    )
  }
}

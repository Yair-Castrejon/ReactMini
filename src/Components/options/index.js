import React, {Component} from 'react';

class Options extends Component{
    render(){
        return(
            <div>
                <h1 style={{color : "white"}}>Options</h1>
                <div style={{textAlign : "center", color : "white", width : "100%", display:"flex", justifyContent : "center"}}>
                    <table style={{width : "25%", alignSelf : "center"}}>
                        <tr>
                            <th>Options</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Difficulty</td>
                            <td>
                                <select style={{backgroundColor : "#8a0c03", color : "white"}}>
                                 <option>Baby</option>
                                 <option>Not so baby</option>
                                 <option>Micros</option>
                                </select>
                            </td>
                        </tr>                        
                        <tr>
                            <td>Sound</td>
                            <td>
                                <select style={{backgroundColor : "#8a0c03", color : "white"}}>
                                 <option>On</option>
                                 <option>Off</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colSpan="100%">
                                <button style={{backgroundColor : "#8a0c03", color : "white"}}>Accept changes</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Options;
"use strict";
exports.__esModule = true;
exports.getProcessedData = void 0;

function getProcessedData(yearOneData, yearTwoData, yearThreeData) {
    // TODO:
    // 1. Remove data items that has reporting rate less than 50
    // 2. Combine relevant data (data of the same code) from each year inorder to compute average
    // 3. Compute average for the combined data to arrive to single value (average value)
    // 4. Return the averaged data as final output
    /***
     * [
        {
          value: 43,
          name: 'Number of members registered',
          code: 'MEMBER_REGISTERED',
        },
        {
          value: 17,
          name: 'Number of active members',
          code: 'ACTIVE_MEMBERS',
        },
      ]
     */

    //declare empty array to store code for MEMBER_REGISTERED and ACTIVE_MEMBERS
    let codeRegistered = [];
    let codeActive = [];


    // Combine relevant data (data of the same code) from each year inorder to compute average
    let combineData = [...yearOneData, ...yearTwoData, ...yearThreeData];

    //Remove data items that has reporting rate less than 50
    let yearData = combineData.filter((item) => item.reportingRate >= 50);

    // Append new filtered data to an empty array
    yearData.forEach((codes) => {
        if (codes.code === 'MEMBER_REGISTERED') {
            codeRegistered.push(codes)
        }
        if (codes.code === 'ACTIVE_MEMBERS') {
            codeActive.push(codes)
        }
    })

    /**
     * Compute average for the combined data to arrive to single value (average value)
     * p = previous value 
     * c = current value
     * @returns 
     */

    function average(data) {
        const initalValue = 0;
        let avg = data.reduce((p, c) => p + c.value, initalValue) / data.length;

        return avg;

    }
    let codeRegisteredAverage = average(codeRegistered)
    let codeActiveAverage = average(codeActive)

    // Return the averaged data as final output
    let finalOutputData = [{
                value: codeRegisteredAverage,
                name: 'Number of members registered',
                code: 'MEMBER_REGISTERED',
            },
            {
                value: codeActiveAverage,
                name: 'Number of active members',
                code: 'ACTIVE_MEMBERS'
            },
        ]
        //convert output into json string
    let final = JSON.stringify(finalOutputData);
    return JSON.parse(final);
}
exports.getProcessedData = getProcessedData;
console.log('Hello World');
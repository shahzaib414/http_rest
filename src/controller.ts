import { RidersLocationHistoryTable } from "."

export const RiderLocation = (request: any, response: any) => {
  const riderLat = request.body.lat
  const riderLong = request.body.long
  if (!riderLat || !riderLong ) {
    return response.json({
      status: "Error",
      errorMessage: "Missing Parameters"
    })
  }
  const riderId = request.params.rider_id
  const riderLocationHistory = RidersLocationHistoryTable.get(riderId)
  if(!riderLocationHistory) {
    RidersLocationHistoryTable.set(riderId,[{ lat: riderLat,long: riderLong}])
  }
   else {
    riderLocationHistory.push({ lat: riderLat,long: riderLong})
    RidersLocationHistoryTable.set(riderId, riderLocationHistory)
   }

   response.json({
    status: "Success",
    message: "Location Added"
   })
}

export const RiderLocations = (request: any, response: any) => {
  const DEFAULT_MAX_RESULT = 1
  const max = request.query.max ?? DEFAULT_MAX_RESULT
  const riderId = request.params.rider_id

  const riderLocationHistory = RidersLocationHistoryTable.get(riderId)
  if (!riderLocationHistory) {
    response.json({
      status: "Error",
      message: "Record not found"
    })
  }
  else {
    const slicedLocations = riderLocationHistory.slice(-max)
    response.json({
      status: "Success",
      results: {
        rider_id: riderId,
        history: slicedLocations.reverse()
      }
    })
  }
}

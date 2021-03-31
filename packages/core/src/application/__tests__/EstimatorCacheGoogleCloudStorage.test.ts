/*
 * © 2020 ThoughtWorks, Inc. All rights reserved.
 */

import moment from 'moment'
import { EstimationRequest } from '../CreateValidRequest'
import EstimatorCacheGoogleCloudStorage from '../EstimatorCacheGoogleCloudStorage'
import EstimatorCache from '../EstimatorCache'
import { EstimationResult } from '../EstimationResult'

function buildFootprintEstimates(startDate: string, consecutiveDays: number) {
  return [...Array(consecutiveDays)].map((v, i) => {
    return {
      timestamp: moment.utc(startDate).add(i, 'days').toDate(),
      serviceEstimates: [],
    }
  })
}

describe('EstimatorCacheGoogleCloudStorage', () => {
  let estimatorCache: EstimatorCache

  beforeEach(() => {
    estimatorCache = new EstimatorCacheGoogleCloudStorage()
  })

  describe('getEstimates', () => {
    it('should return estimates of a request', () => {
      const startDate = '2020-10-01'
      const endDate = '2020-10-02'

      const cachedData: EstimationResult[] = buildFootprintEstimates(
        startDate,
        1,
      )
      const request: EstimationRequest = {
        startDate: moment.utc(startDate).toDate(),
        endDate: moment.utc(endDate).toDate(),
      }
      const estimates = estimatorCache.getEstimates(request)
      expect(estimates).toEqual(cachedData)
    })
  })
})

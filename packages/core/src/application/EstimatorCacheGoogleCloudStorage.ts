/*
 * © 2020 ThoughtWorks, Inc. All rights reserved.
 */

import EstimatorCache from './EstimatorCache'
import { EstimationResult } from './EstimationResult'
import { EstimationRequest } from './CreateValidRequest'
export default class EstimatorCacheGoogleCloudStorage
  implements EstimatorCache {
  async getEstimates(request: EstimationRequest): Promise<EstimationResult[]> {
    return null
  }

  async setEstimates(estimates: EstimationResult[]) {}
}

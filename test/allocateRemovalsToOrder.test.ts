import { allocateRemovalsToOrder } from '../lib/allocateRemovalsToOrder';

describe('allocateRemovalsToOrder', () => {
  it('should be tested', async () => {
    const result = await allocateRemovalsToOrder({
      orderQuantity: 1,
    });
    expect(result).toStrictEqual([]);
  });
});

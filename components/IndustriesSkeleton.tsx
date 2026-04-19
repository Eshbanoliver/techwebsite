import Skeleton from './Skeleton';

export default function IndustriesSkeleton() {
  return (
    <div className="section" style={{ padding: '100px 0' }}>
      <div className="container">
        <Skeleton width={400} height={80} className="mx-auto mb-20" borderRadius={10} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 30px', flex: 1 }}>
            {[1,2,3,4,5,6,7,8,9,10].map(i => (
              <Skeleton key={i} width="100%" height={90} borderRadius={20} />
            ))}
          </div>
          <Skeleton width={450} height={600} borderRadius={30} style={{ flex: '0 0 450px' }} />
        </div>
      </div>
    </div>
  );
}

import Skeleton from './Skeleton';

export default function FAQSkeleton() {
  return (
    <div className="section" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '100px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Skeleton width={100} height={16} className="mb-4 ml-5" />
            {[1,2,3,4].map(i => (
              <Skeleton key={i} width="100%" height={64} borderRadius={16} />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[1,2,3,4,5].map(i => (
              <Skeleton key={i} width="100%" height={88} borderRadius={24} />
            ))}
            <Skeleton width="100%" height={200} borderRadius={32} className="mt-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

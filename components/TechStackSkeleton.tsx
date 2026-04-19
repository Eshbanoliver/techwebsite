import Skeleton from './Skeleton';

export default function TechStackSkeleton() {
  return (
    <div className="section" style={{ padding: '140px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <Skeleton width={180} height={30} borderRadius={6} className="mx-auto mb-6" />
          <Skeleton width="60%" height={60} className="mx-auto mb-6" />
          <Skeleton width="80%" height={24} className="mx-auto" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ background: 'var(--bg-glass)', borderRadius: '32px', padding: '40px 30px' }}>
              <Skeleton width={54} height={54} borderRadius={16} className="mx-auto mb-6" />
              <Skeleton width="60%" height={24} className="mx-auto mb-2" />
              <Skeleton width="40%" height={16} className="mx-auto mb-10" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[1,2,3,4,5].map(j => (
                  <Skeleton key={j} width="100%" height={48} borderRadius={12} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

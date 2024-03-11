# Kubernetes Setup

```
kubeadm join 10.0.0.140:6443 --token m6chsq.almyz69budvtsjza \
	--discovery-token-ca-cert-hash sha256:3c062495a5be606cf56edc22e05581d5419f0d14124caf3a5b39d694c609e365
```

```
helm install postgresql oci://registry-1.docker.io/bitnamicharts/postgresql \
  --set auth.username=postgres,auth.password=postgres,auth.database=default
```

postgresql.default.svc.cluster.local - Read/Write connection

## Install for PG:
```
helm repo add stable https://charts.helm.sh/stable
helm repo update
helm install postgres \
  --set "image.repository=postgres" \
  --set "image.tag=15.0" \
  --set "postgresqlDataDir=/data/pgdata" \
  --set "persistence.mountPath=/data/" \
  --set "postgresqlDatabase=default" \
  --set "persistence.existingClaim='default'" \
  --set "persistence.size=4Gi" \
  --set "-set global.storageClass='default'" \
  --namespace napi \
  stable/postgresql
```
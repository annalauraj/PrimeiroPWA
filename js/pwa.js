window.onload = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
    navigator.serviceWorker.ready
          .then(registration => registration.sync.register('database-sync'))
          .then(() => console.log("Serviço de sincronização em segundo plano registrado com sucesso"))
          .catch(err => console.error("Erro ao registrar o serviço de sincronização em segundo plano", err));
    navigator.serviceWorker.ready
          .then(registration => registration.periodicSync.register('database-sync-periodic', {minInterval: 2}))
          .then(() => console.log("Serviço de sincronização periódica em segundo plano registrado com sucesso"))
          .catch(err => console.error("Erro ao registrar o serviço de sincronização periódica em segundo plano", err));
  }
};

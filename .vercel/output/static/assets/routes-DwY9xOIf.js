import{n as e,r as t,t as n}from"./index-B2JTc6up.js";var r=t(e()),i=`<div class="flex min-h-screen">
<!-- SIDEBAR (Solo PC) -->
<aside class="w-64 bg-white border-r border-slate-200 flex-shrink-0 hidden md:flex flex-col sticky top-0 h-screen">
<div class="p-6 border-b border-slate-100">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-xl">🩺</div>
<div>
<h1 class="font-bold text-slate-800 leading-tight">Cuidados</h1>
<p class="text-xs text-slate-500">Paliativos · Seguimiento</p>
</div>
</div>
</div>
<nav class="flex-1 p-4 space-y-2 overflow-y-auto scrollbar-thin">
<button data-view="agenda" class="nav-btn active w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all">
<span class="text-lg">📅</span> Agenda Semanal
</button>
<button data-view="pacientes" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
<span class="text-lg">👥</span> Fichas de Pacientes
</button>
<button data-view="visitas" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
<span class="text-lg">📝</span> Registro de Visitas
</button>
<button data-view="planilla" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
<span class="text-lg">📊</span> Planilla de visitas
</button>
</nav>
<div class="p-4 border-t border-slate-100 space-y-2 flex-shrink-0">
<button id="btn-sync-now" class="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-blue-700 hover:bg-blue-50 rounded-lg transition">
<span id="sync-icon">🔄</span> <span id="sync-label">Sincronizar ahora</span>
</button>
<p class="sync-status text-center" id="sync-status">Última sync: nunca</p>
<button id="btn-import-csv" class="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-emerald-700 hover:bg-emerald-50 rounded-lg transition"><span>📊</span> Importar CSV</button>
<button id="btn-config" class="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition"><span>⚙️</span> Configuración</button>
<button id="btn-export" class="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition"><span>💾</span> Exportar JSON</button>
<button id="btn-import" class="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded-lg transition"><span>📥</span> Importar JSON</button>
<button id="btn-reset" class="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition"><span>🗑️</span> Reiniciar demo</button>
</div>
</aside>
<!-- MAIN -->
<main class="flex-1 flex flex-col min-w-0">
<header class="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
<div class="flex items-center gap-2">
<div class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white">🩺</div>
<span class="font-semibold text-sm">Cuidados Paliativos</span>
</div>
<div class="flex gap-2">
<button id="btn-sync-now-mobile" class="text-xs text-blue-700 font-medium px-2 py-1 rounded hover:bg-blue-50">🔄 Sync</button>
<button id="btn-config-mobile" class="text-xs text-slate-600 font-medium px-2 py-1 rounded hover:bg-slate-50">⚙️ Config</button>
</div>
</header>
<!-- Barra de navegación móvil -->
<nav class="md:hidden bg-white border-b border-slate-200 px-2 py-2 flex gap-1 overflow-x-auto">
<button data-view="agenda" class="nav-btn active flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium">📅 Agenda</button>
<button data-view="pacientes" class="nav-btn flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium text-slate-600">👥 Pacientes</button>
<button data-view="visitas" class="nav-btn flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium text-slate-600">📝 Visitas</button>
<button data-view="planilla" class="nav-btn flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium text-slate-600">📊 Planilla</button>
<button id="btn-import-csv-mobile" class="flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium text-emerald-700">📊 CSV</button>
</nav>
<div class="flex-1 overflow-auto">
<!-- ============ AGENDA ============ -->
<section id="view-agenda" class="view active p-4 md:p-8 fade-in">
<div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-4">
<div class="flex flex-wrap items-center justify-between gap-3">
<div class="flex items-center gap-2">
<button id="btn-prev-week" class="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">←</button>
<button id="btn-today" class="px-3 py-1.5 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 text-xs font-semibold border border-brand-200">Hoy</button>
<button id="btn-next-week" class="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">→</button>
</div>
<div class="text-center">
<h2 class="text-lg font-bold text-slate-800" id="agenda-week-label">Semana actual</h2>
<p class="text-xs text-slate-500" id="agenda-week-sublabel"></p>
</div>
<button id="btn-toggle-vista" class="hidden lg:flex px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 text-slate-600 hover:bg-slate-50 items-center gap-1.5">
<span id="btn-toggle-vista-icon">🗂️</span> <span id="btn-toggle-vista-label">Comprimir todo</span>
</button>
<button id="btn-add-visit" class="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm flex items-center gap-2">
<span>➕</span> Nueva visita
</button>
</div>
</div>

<div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-4">
<div class="flex flex-wrap items-start justify-between gap-2 mb-3">
<div>
<h3 class="text-sm font-bold text-slate-800">Origen del recorrido</h3>
<p class="text-xs text-slate-500">Google Maps arma la ruta desde acá. A la mañana suele ser tu casa; a la tarde, el trabajo.</p>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
<label class="block">
<span class="block text-xs font-semibold text-amber-700 mb-1">Mañana</span>
<input id="origen-manana" type="text" autocomplete="street-address" placeholder="Ej: mi casa, Av. San Juan 1234" class="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100">
</label>
<label class="block">
<span class="block text-xs font-semibold text-indigo-700 mb-1">Tarde</span>
<input id="origen-tarde" type="text" autocomplete="street-address" placeholder="Ej: trabajo, Villa Soldati" class="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100">
</label>
</div>
<p id="origen-status" class="text-[11px] text-slate-500 mt-2">Si dejás un origen vacío, esa ruta empieza en el primer paciente.</p>
</div>

<!-- VISTA DESKTOP -->
<div class="hidden lg:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div class="grid grid-cols-7 bg-slate-50 border-b border-slate-200" id="agenda-header"></div>
<div class="grid grid-cols-7 divide-x divide-slate-200" id="agenda-grid"></div>
</div>
<!-- VISTA MÓVIL -->
<div class="lg:hidden space-y-3">
<div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-2">
<div class="grid grid-cols-7 gap-1" id="mobile-day-tabs"></div>
</div>
<div id="mobile-day-content" class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4"></div>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
<div class="bg-white p-4 rounded-xl border border-slate-200"><p class="text-xs text-slate-500">Visitas esta semana</p><p class="text-2xl font-bold text-slate-800 mt-1" id="stat-week">0</p></div>
<div class="bg-white p-4 rounded-xl border border-slate-200"><p class="text-xs text-slate-500">Horas estimadas</p><p class="text-2xl font-bold text-brand-600 mt-1" id="stat-hours">0h</p></div>
<div class="bg-white p-4 rounded-xl border border-slate-200"><p class="text-xs text-slate-500">Pacientes activos</p><p class="text-2xl font-bold text-brand-600 mt-1" id="stat-active">0</p></div>
<div class="bg-white p-4 rounded-xl border border-slate-200"><p class="text-xs text-slate-500">Con opioides</p><p class="text-2xl font-bold text-amber-600 mt-1" id="stat-opioides">0</p></div>
</div>
<!-- PANEL DE PACIENTES PENDIENTES -->
<div id="pending-panel" class="mt-6 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"></div>
</section>
<!-- ============ PACIENTES ============ -->
<section id="view-pacientes" class="view p-4 md:p-8 fade-in">
<div class="flex flex-wrap items-center justify-between gap-3 mb-6">
<div>
<h2 class="text-2xl font-bold text-slate-800">Fichas de Pacientes</h2>
<p class="text-sm text-slate-500">Gestión integral de NyA en seguimiento</p>
</div>
<button id="btn-add-patient" class="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-sm flex items-center gap-2">
<span>➕</span> Nuevo Paciente
</button>
</div>
<div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-4">
<div class="flex flex-wrap gap-3 items-center">
<div class="flex-1 min-w-[200px] relative">
<span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
<input id="search-pacientes" type="text" placeholder="Buscar por nombre, DNI, obra social..." class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100">
</div>
<select id="filter-estado" class="px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
<option value="">Todos los estados</option>
<option value="Activo">Activo</option>
<option value="Intermitente">Intermitente</option>
<option value="Fuera de seguimiento">Fuera de seguimiento</option>
</select>
<!-- NUEVOS FILTROS -->
<select id="filter-empresa" class="px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
<option value="">Todas las empresas</option>
</select>
<select id="filter-os" class="px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
<option value="">Todas las Obras Sociales</option>
</select>
<div class="flex rounded-xl border border-slate-200 overflow-hidden">
<button id="view-cards" class="view-toggle-btn active px-3 py-2 text-xs font-medium transition" title="Vista tarjetas">🗂️ Tarjetas</button>
<button id="view-list" class="view-toggle-btn px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 transition" title="Vista lista">📋 Lista</button>
</div>
</div>
</div>
<div id="pacientes-container"></div>
</section>
<!-- ============ VISITAS ============ -->
<section id="view-visitas" class="view p-4 md:p-8 fade-in">
<div class="flex flex-wrap items-center justify-between gap-3 mb-6">
<div>
<h2 class="text-2xl font-bold text-slate-800">Registro de Visitas</h2>
<p class="text-sm text-slate-500">Pendientes y notas post visita · más recientes primero</p>
</div>
<input id="search-visitas" type="text" placeholder="Buscar en evoluciones..." class="px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
</div>
<div id="visitas-list" class="space-y-3"></div>
</section>
<!-- ============ PLANILLA DE VISITAS ============ -->
<section id="view-planilla" class="view p-4 md:p-8 fade-in">
<div class="flex items-center justify-between gap-3 mb-6">
<button id="btn-prev-month" class="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">←</button>
<div class="text-center">
<h2 class="text-lg font-bold text-slate-800" id="planilla-mes-label">Mes actual</h2>
<p class="text-xs text-slate-500">Visitas evolucionadas y firmadas</p>
</div>
<button id="btn-next-month" class="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600">→</button>
</div>
<div id="planilla-cards" class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2"></div>
<p class="text-xs text-slate-400 mb-6">💡 El valor por visita se guarda solo, no hace falta cargarlo cada mes.</p>
<div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 mb-4">
<div class="flex flex-wrap gap-3 items-center">
<select id="planilla-filter-empresa" class="px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
<option value="">Todas las empresas</option>
</select>
<label class="flex items-center gap-2 text-sm text-slate-600 px-2">
<input id="planilla-solo-pendientes" type="checkbox" class="w-4 h-4 accent-brand-600"> Solo pendientes
</label>
</div>
</div>
<div id="planilla-table-wrap" class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"></div>
</section>
</div>
</main>
</div>

<!-- MODAL PACIENTE -->
<div id="modal-paciente" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
<div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
<div class="p-5 border-b border-slate-100 flex items-center justify-between">
<h3 id="modal-paciente-title" class="text-lg font-bold text-slate-800">Nuevo Paciente</h3>
<button class="modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
</div>
<form id="form-paciente" class="flex-1 overflow-auto p-5 space-y-4 scrollbar-thin">
<input type="hidden" id="pac-id">
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div class="md:col-span-2"><label class="block text-xs font-semibold text-slate-600 mb-1">Nombre del NyA *</label><input id="pac-nombre" required class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">DNI</label><input id="pac-dni" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Fecha de nacimiento</label><input id="pac-nac" type="date" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Dirección</label><input id="pac-direccion" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Piso / Depto</label><input id="pac-piso" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Empresa / Prepaga</label><input id="pac-empresa" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Obra Social</label><input id="pac-os" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500" placeholder="OSDE, CEMIC, Swiss Medical..."></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Nº Afiliado</label><input id="pac-afiliado" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Contacto</label><input id="pac-contacto" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Estado</label><select id="pac-estado" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"><option>Activo</option><option>Intermitente</option><option>Fuera de seguimiento</option></select></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Usa opioides</label><select id="pac-opioides" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"><option value="No">No</option><option value="Sí">Sí</option></select></div>
</div>
<div class="flex justify-end gap-2 pt-4 border-t border-slate-100">
<button type="button" class="modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">Cancelar</button>
<button type="submit" class="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium">Guardar</button>
</div>
</form>
</div>
</div>

<!-- MODAL DETALLE -->
<div id="modal-detalle" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
<div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
<div class="p-5 border-b border-slate-100 flex items-center justify-between">
<h3 class="text-lg font-bold text-slate-800">Ficha del Paciente</h3>
<button class="modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
</div>
<div id="detalle-content" class="flex-1 overflow-auto p-5 scrollbar-thin"></div>
</div>
</div>

<!-- MODAL AGENDA -->
<div id="modal-agenda" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[92vh] overflow-hidden flex flex-col">
<div class="p-5 border-b border-slate-100 flex items-center justify-between">
<h3 id="modal-agenda-title" class="text-lg font-bold text-slate-800">Nueva visita</h3>
<button class="modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
</div>
<form id="form-agenda" class="flex-1 overflow-auto p-5 space-y-4 scrollbar-thin">
<input type="hidden" id="ag-id">
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Paciente *</label><select id="ag-paciente" required class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></select></div>
<div class="grid grid-cols-2 gap-3">
<div>
<label class="block text-xs font-semibold text-slate-600 mb-1">Día *</label>
<select id="ag-dia" required class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
<option>Lunes</option><option>Martes</option><option>Miércoles</option>
<option>Jueves</option><option>Viernes</option><option>Sábado</option><option>Domingo</option>
</select>
</div>
<div>
<label class="block text-xs font-semibold text-slate-600 mb-1">Fecha</label>
<input id="ag-fecha" type="date" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
</div>
</div>
<div id="ag-fecha-preview" class="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700">
📅 Se agendará para: <strong id="ag-fecha-preview-text">-</strong>
</div>
<div class="bg-brand-50 border border-brand-200 rounded-xl p-3">
<div class="flex items-center justify-between mb-2">
<p class="text-xs font-semibold text-brand-800">🕐 Hora de inicio</p>
<p class="text-[10px] text-brand-700" id="ag-hora-preview">Libre: 09:45</p>
</div>
<input id="ag-hora" type="time" value="09:00" required class="w-full px-3 py-2 rounded-lg border border-brand-200 text-sm focus:outline-none focus:border-brand-500">
<p class="text-[10px] text-brand-700 mt-2">⏱️ Visita 30' + traslado 15' = 45' bloqueados</p>
</div>
<label class="flex items-start gap-2 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
<input id="ag-recurrente" type="checkbox" class="mt-0.5 w-4 h-4 accent-brand-600">
<div><p class="text-sm font-medium text-slate-700">🔁 Recurrente</p><p class="text-[11px] text-slate-500" id="ag-recurrente-hint">Se repite cada semana (todos los <span id="ag-recurrente-dia">lunes</span>)</p></div>
</label>
<div id="ag-intervalo-wrap" class="hidden">
<label class="block text-xs font-semibold text-slate-600 mb-1">Se repite cada</label>
<select id="ag-intervalo" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
<option value="1">Semana (todas las semanas)</option>
<option value="2">2 semanas</option>
<option value="3">3 semanas</option>
<option value="4">4 semanas (aprox. mensual)</option>
</select>
</div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Notas (ej: llevar recetas)</label><textarea id="ag-notas" rows="2" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></textarea></div>
<div id="ag-saltos-section" class="hidden bg-amber-50 border border-amber-200 rounded-xl p-3">
<p class="text-xs font-semibold text-amber-800 mb-2">⏭️ Semanas saltadas</p>
<div id="ag-saltos-list" class="space-y-1 mb-2"></div>
<div class="flex gap-2"><input id="ag-salto-fecha" type="date" class="flex-1 px-2 py-1.5 rounded-lg border border-amber-200 text-sm"><button type="button" id="btn-add-salto" class="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs rounded-lg font-medium">+ Saltar</button></div>
</div>
<div class="flex justify-between gap-2 pt-2">
<button type="button" id="btn-delete-agenda" class="hidden px-3 py-2 rounded-lg text-sm font-medium text-rose-600 hover:bg-rose-50">Eliminar</button>
<div class="flex gap-2 ml-auto">
<button type="button" class="modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">Cancelar</button>
<button type="submit" class="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium">Guardar</button>
</div>
</div>
</form>
</div>
</div>

<!-- MODAL EVOLUCIÓN -->
<div id="modal-evolucion" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
<div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
<div class="p-5 border-b border-slate-100 flex items-center justify-between">
<h3 class="text-lg font-bold text-slate-800">Pendientes</h3>
<button class="modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
</div>
<form id="form-evolucion" class="flex-1 overflow-auto p-5 space-y-4 scrollbar-thin">
<input type="hidden" id="ev-id"><input type="hidden" id="ev-agendaId"><input type="hidden" id="ev-pacienteId">
<div id="ev-paciente-info" class="bg-brand-50 border border-brand-200 rounded-xl p-4"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Fecha de visita *</label><input id="ev-fecha" type="date" required class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Pendiente / nota (opcional)</label><textarea id="ev-notas" rows="5" placeholder="Ej: mandar receta de ibuprofeno" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500"></textarea><p class="text-[11px] text-slate-400 mt-1" id="ev-notas-hint"></p></div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
<label class="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer"><input id="ev-sistema" type="checkbox" class="mt-1 w-4 h-4 accent-brand-600"><div><p class="text-sm font-medium text-slate-700">✓ Evolucioné en el sistema</p><p class="text-xs text-slate-500">Cargada en HC digital</p></div></label>
<label id="ev-firma-wrap" class="flex items-start gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer"><input id="ev-firma" type="checkbox" class="mt-1 w-4 h-4 accent-brand-600"><div><p class="text-sm font-medium text-slate-700">✓ Firmó planilla control OS</p><p class="text-xs text-slate-500">Planilla de la obra social</p></div></label>
</div>
<div id="ev-firma-oculto-msg" class="hidden bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-800">
ℹ️ <strong>OSDE / CEMIC</strong>: esta obra social no requiere planilla de firmas.
</div>
<div class="flex justify-end gap-2 pt-4 border-t border-slate-100">
<button type="button" class="modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">Cancelar</button>
<button type="submit" class="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium">Guardar</button>
</div>
</form>
</div>
</div>

<!-- MODAL MOVER VISITA -->
<div id="modal-mover" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
<div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
<div class="p-5 border-b border-slate-100 flex items-center justify-between">
<h3 class="text-lg font-bold text-slate-800">↪️ Mover visita</h3>
<button class="modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
</div>
<form id="form-mover" class="p-5 space-y-4">
<input type="hidden" id="mover-id">
<p class="text-xs text-slate-500" id="mover-info"></p>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Nuevo día</label>
<select id="mover-dia" required class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
<option>Lunes</option><option>Martes</option><option>Miércoles</option>
<option>Jueves</option><option>Viernes</option><option>Sábado</option><option>Domingo</option>
</select>
</div>
<div><label class="block text-xs font-semibold text-slate-600 mb-1">Nueva hora</label>
<input id="mover-hora" type="time" required class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-brand-500">
</div>
<p class="text-[11px] text-slate-400">Solo mueve esta semana. La visita recurrente sigue apareciendo normalmente la semana que viene.</p>
<div class="flex justify-end gap-2 pt-2">
<button type="button" class="modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">Cancelar</button>
<button type="submit" class="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium">Mover</button>
</div>
</form>
</div>
</div>

<!-- MODAL CONFIG -->
<div id="modal-config" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
<div class="p-5 border-b border-slate-100 flex items-center justify-between">
<h3 class="text-lg font-bold text-slate-800">Configuración</h3>
<button class="modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
</div>
<div class="p-5 space-y-4">
<div class="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3">
<p class="text-xs font-bold text-blue-800 uppercase tracking-wide">Conexión con Google Sheets</p>
<div><label class="block text-xs font-medium text-blue-800 mb-1">URL del Apps Script</label><input id="cfg-api-url" type="url" placeholder="https://script.google.com/macros/s/.../exec" class="w-full px-3 py-2 rounded-lg border border-blue-200 text-sm"></div>
<div><label class="block text-xs font-medium text-blue-800 mb-1">Token secreto</label><input id="cfg-api-token" type="text" placeholder="UUID de la hoja Config" class="w-full px-3 py-2 rounded-lg border border-blue-200 text-sm font-mono"></div>
<p class="text-[11px] text-blue-700">Si dejás esto vacío, la app funciona solo con localStorage.</p>
</div>
<div class="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
<p class="text-xs font-bold text-amber-800 uppercase tracking-wide">Origen del recorrido</p>
<p class="text-[11px] text-amber-800">Los mismos datos que en la agenda. La ruta de la mañana sale del primero y la de la tarde del segundo.</p>
<div><label class="block text-xs font-medium text-amber-900 mb-1">Mañana (casa)</label><input id="cfg-origen-manana" type="text" autocomplete="street-address" placeholder="Ej: mi casa, Av. San Juan 1234" class="w-full px-3 py-2 rounded-lg border border-amber-200 text-sm"></div>
<div><label class="block text-xs font-medium text-amber-900 mb-1">Tarde (trabajo)</label><input id="cfg-origen-tarde" type="text" autocomplete="street-address" placeholder="Ej: trabajo, Villa Soldati" class="w-full px-3 py-2 rounded-lg border border-amber-200 text-sm"></div>
</div>
<div class="bg-slate-50 border border-slate-200 rounded-xl p-4">
<p class="text-xs font-bold text-slate-600 uppercase tracking-wide mb-2">Constantes de la agenda</p>
<p class="text-xs text-slate-600">⏱️ Duración de visita: <strong>30 minutos</strong></p>
<p class="text-xs text-slate-600">🚗 Tiempo de traslado: <strong>15 minutos</strong></p>
<p class="text-xs text-slate-600">📦 Bloque total por paciente: <strong>45 minutos</strong></p>
</div>
<div class="flex justify-end gap-2">
<button class="modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">Cancelar</button>
<button id="btn-save-config" class="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium">Guardar</button>
</div>
</div>
</div>
</div>

<!-- MODAL IMPORT CSV -->
<div id="modal-csv" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
<div class="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col">
<div class="p-5 border-b border-slate-100 flex items-center justify-between">
<div><h3 class="text-lg font-bold text-slate-800">Importar pacientes desde CSV</h3><p class="text-xs text-slate-500 mt-0.5">Exportá tu Google Sheet como CSV (Archivo → Descargar → CSV)</p></div>
<button class="modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
</div>
<div class="flex-1 overflow-auto p-5 space-y-4 scrollbar-thin">
<div id="csv-step1">
<div class="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-brand-400 transition cursor-pointer" id="csv-dropzone">
<p class="text-4xl mb-2">📊</p>
<p class="text-sm font-medium text-slate-700">Arrastrá el CSV acá o hacé clic</p>
<input id="csv-file" type="file" accept=".csv,text/csv,text/plain" class="hidden">
</div>
<div class="mt-4">
<label class="block text-xs font-semibold text-slate-600 mb-1">O pegá el contenido</label>
<textarea id="csv-paste" rows="4" class="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm font-mono"></textarea>
<div class="flex items-center gap-4 mt-3 text-xs flex-wrap">
<label class="flex items-center gap-2"><input type="radio" name="csv-sep" value="auto" checked> Auto</label>
<label class="flex items-center gap-2"><input type="radio" name="csv-sep" value=","> Coma</label>
<label class="flex items-center gap-2"><input type="radio" name="csv-sep" value=";"> Punto y coma</label>
<label class="flex items-center gap-2"><input type="checkbox" id="csv-has-header" checked> 1ra fila = encabezados</label>
</div>
<button id="csv-preview-btn" class="mt-4 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Vista previa →</button>
</div>
</div>
<div id="csv-step2" class="hidden">
<div class="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 mb-3"><strong>⚠️ Revisá el mapeo.</strong> El DNI se usa para actualizar pacientes existentes.</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4" id="csv-mapping"></div>
<div><p class="text-xs font-semibold text-slate-600 mb-2">Vista previa</p><div class="overflow-auto max-h-64 border border-slate-200 rounded-lg"><table class="preview-table w-full" id="csv-preview-table"></table></div></div>
<div class="flex justify-between items-center pt-4 border-t border-slate-100">
<p class="text-xs text-slate-500" id="csv-stats"></p>
<div class="flex gap-2"><button id="csv-back-btn" class="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">← Atrás</button><button id="csv-import-btn" class="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium">Importar</button></div>
</div>
</div>
</div>
</div>
</div>

<!-- MODAL IMPORT JSON -->
<div id="modal-import" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
<div class="p-5 border-b border-slate-100 flex items-center justify-between">
<h3 class="text-lg font-bold text-slate-800">Importar JSON</h3>
<button class="modal-close text-slate-400 hover:text-slate-600 text-2xl leading-none">&times;</button>
</div>
<div class="p-5 space-y-4">
<p class="text-sm text-slate-600">Seleccioná un archivo JSON previamente exportado.</p>
<input id="import-file" type="file" accept="application/json" class="w-full text-sm">
<div class="flex justify-end gap-2">
<button class="modal-close px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">Cancelar</button>
<button id="btn-do-import" class="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-medium">Importar</button>
</div>
</div>
</div>
</div>

<div id="toast-container" class="fixed top-4 right-4 z-[100] space-y-2"></div>`;function a(e){e.innerHTML=i,o()}function o(){let e={pacientes:`paliativos_pacientes`,agenda:`paliativos_agenda`,evoluciones:`paliativos_evoluciones`,tarifas:`paliativos_tarifas`,config:`paliativos_config`,lastSync:`paliativos_last_sync`,pendingChanges:`paliativos_pending`,viewMode:`paliativos_view_mode`},t={pacientes:[],agenda:[],evoluciones:[],tarifas:[],config:{apiUrl:``,apiToken:``,origenManana:``,origenTarde:``},lastSync:null,pendingChanges:[],viewMode:`cards`},n=[`Lunes`,`Martes`,`Miércoles`,`Jueves`,`Viernes`,`Sábado`,`Domingo`],r=[`L`,`M`,`X`,`J`,`V`,`S`,`D`],i={Lunes:0,Martes:1,Miércoles:2,Jueves:3,Viernes:4,Sábado:5,Domingo:6},a=0,o=null,s={},c=null,l=new Set;function u(){return crypto&&crypto.randomUUID?crypto.randomUUID():`id-`+Date.now()+`-`+Math.random().toString(36).slice(2,9)}function d(){localStorage.setItem(e.pacientes,JSON.stringify(t.pacientes)),localStorage.setItem(e.agenda,JSON.stringify(t.agenda)),localStorage.setItem(e.evoluciones,JSON.stringify(t.evoluciones)),localStorage.setItem(e.tarifas,JSON.stringify(t.tarifas)),localStorage.setItem(e.config,JSON.stringify(t.config)),localStorage.setItem(e.lastSync,t.lastSync||``),localStorage.setItem(e.pendingChanges,JSON.stringify(t.pendingChanges)),localStorage.setItem(e.viewMode,t.viewMode)}function f(){try{let n=JSON.parse(localStorage.getItem(e.pacientes)||`[]`);t.pacientes=n.map(e=>({...e,id:String(e.id).trim()}));let r=JSON.parse(localStorage.getItem(e.agenda)||`[]`);t.agenda=r.map(e=>({...e,id:String(e.id).trim(),pacienteId:String(e.pacienteId).trim()}));let i=JSON.parse(localStorage.getItem(e.evoluciones)||`[]`);t.evoluciones=i.map(e=>({...e,id:String(e.id).trim(),pacienteId:String(e.pacienteId).trim()})),t.tarifas=JSON.parse(localStorage.getItem(e.tarifas)||`[]`),t.config=Object.assign({apiUrl:``,apiToken:``,origenManana:``,origenTarde:``},JSON.parse(localStorage.getItem(e.config)||`{}`)),t.lastSync=localStorage.getItem(e.lastSync)||null,t.pendingChanges=JSON.parse(localStorage.getItem(e.pendingChanges)||`[]`),t.viewMode=localStorage.getItem(e.viewMode)||`cards`}catch{}}let p=!1;function m(e){if(!e&&e!==0)return`09:00`;if(typeof e==`number`){if(e>=0&&e<1){let t=Math.round(e*24*60),n=String(Math.floor(t/60)%24).padStart(2,`0`),r=String(t%60).padStart(2,`0`);return n+`:`+r}return`09:00`}let t=String(e).trim();if(!t)return`09:00`;if(/^0?\.\d+$/.test(t)){let e=parseFloat(t);if(e>=0&&e<1){let t=Math.round(e*24*60),n=String(Math.floor(t/60)%24).padStart(2,`0`),r=String(t%60).padStart(2,`0`);return n+`:`+r}}if(/^\d{1,2}:\d{2}$/.test(t))return t.padStart(5,`0`);if(t.includes(`T`)){let e=new Date(t);if(!isNaN(e.getTime())){let t=String(e.getHours()).padStart(2,`0`),n=String(e.getMinutes()).padStart(2,`0`);return t+`:`+n}}return`09:00`}async function h(){if(p){console.log(`⏳ Sincronización ya en progreso, omitiendo solicitud...`);return}if(!t.config.apiUrl||!t.config.apiToken){A(`Configurá la URL y token en ⚙️ Configuración`,`info`);return}p=!0,v(`syncing`);try{if(t.pendingChanges.length>0){let e=[...t.pendingChanges];for(let n of e)try{await g(`POST`,{...n,token:t.config.apiToken}),t.pendingChanges=t.pendingChanges.filter(e=>e.timestamp!==n.timestamp)}catch(e){console.warn(`⚠️ Falló el envío de un cambio pendiente. Se reintentará la próxima vez.`,e,n)}d()}if(t.pendingChanges.length>0){v(`pending`),A(`Hay cambios sin poder enviar todavía. Se reintentará en la próxima sincronización.`,`info`);return}console.log(`📥 Iniciando descarga de datos...`);let e=await g(`POST`,{action:`getAll`,token:t.config.apiToken,t:Date.now()});if(console.log(`📦 Datos recibidos:`,{pacientes:e.pacientes?.length||0,agenda:e.agenda?.length||0,evoluciones:e.evoluciones?.length||0}),e.error)throw Error(e.error);e.pacientes&&Array.isArray(e.pacientes)&&(t.pacientes=e.pacientes.map(e=>({...e,id:String(e.id||``).trim()}))),e.agenda&&Array.isArray(e.agenda)&&(t.agenda=e.agenda.map(e=>({...e,id:String(e.id||``).trim(),pacienteId:String(e.pacienteId||``).trim(),diaSemana:e.diaSemana?String(e.diaSemana).trim():``,horaInicio:m(e.horaInicio)}))),e.evoluciones&&Array.isArray(e.evoluciones)&&(t.evoluciones=e.evoluciones.map(e=>({...e,id:String(e.id||``).trim(),pacienteId:String(e.pacienteId||``).trim()}))),e.tarifas&&Array.isArray(e.tarifas)&&(t.tarifas=e.tarifas.map(e=>({...e,empresa:String(e.empresa||``).trim()}))),t.lastSync=new Date().toISOString(),d(),v(`ok`),A(`Sincronizado con Google Sheets`)}catch(e){console.error(`💥 Error crítico en la descarga de sincronización:`,e),v(`error`),A(`Error al sincronizar: `+e.message,`error`)}finally{p=!1,W(),we()}}async function g(e,n){let r={method:e};e===`POST`&&(r.body=JSON.stringify(n),r.headers={"Content-Type":`text/plain;charset=utf-8`});let i=await fetch(t.config.apiUrl,r);if(!i.ok)throw Error(`HTTP `+i.status);let a=await i.json();if(a&&a.error)throw Error(a.error);return a}function _(e,n){let r=n.sheet,i=n.row?n.row.id:n.id;t.pendingChanges=t.pendingChanges.filter(t=>{let n=t.row?t.row.id:t.id;return t.action!==e||t.sheet!==r||n!==i}),t.pendingChanges.push({action:e,...n,timestamp:Date.now()}),d(),v(`pending`)}function v(e){let n=document.getElementById(`sync-icon`),r=document.getElementById(`sync-label`),i=document.getElementById(`sync-status`);e===`syncing`?(n.innerHTML=`<span class="inline-block spin">🔄</span>`,r.textContent=`Sincronizando...`,i.textContent=`Sincronizando...`,i.className=`sync-status text-center sync-pending`):e===`ok`?(n.textContent=`🔄`,r.textContent=`Sincronizar ahora`,i.textContent=`✓ Sync: `+new Date(t.lastSync).toLocaleTimeString(`es-AR`,{hour:`2-digit`,minute:`2-digit`}),i.className=`sync-status text-center sync-ok`):e===`pending`?(n.textContent=`🔄`,r.textContent=`Sincronizar ahora`,i.textContent=`⏳ Cambios pendientes`,i.className=`sync-status text-center sync-pending`):e===`error`?(n.textContent=`🔄`,r.textContent=`Sincronizar ahora`,i.textContent=`✗ Error de sync`,i.className=`sync-status text-center sync-error`):(i.textContent=`Última sync: nunca`,i.className=`sync-status text-center`)}async function y(e,n){let r={Pacientes:`upsertPaciente`,Agenda:`upsertAgenda`,Evoluciones:`upsertEvolucion`};if(!t.config.apiUrl||!t.config.apiToken){_(r[e],{sheet:e,row:n});return}try{await g(`POST`,{action:r[e],row:n,token:t.config.apiToken})}catch(t){console.error(t),_(r[e],{sheet:e,row:n})}}async function b(e,n){if(!t.config.apiUrl||!t.config.apiToken){_(`deleteRow`,{sheet:e,id:n});return}try{await g(`POST`,{action:`deleteRow`,sheet:e,id:n,token:t.config.apiToken})}catch{_(`deleteRow`,{sheet:e,id:n})}}async function ee(e){let n={...e,id:e.empresa};if(!t.config.apiUrl||!t.config.apiToken){_(`upsertTarifa`,{sheet:`Tarifas`,row:n});return}try{await g(`POST`,{action:`upsertTarifa`,row:n,token:t.config.apiToken})}catch(e){console.error(e),_(`upsertTarifa`,{sheet:`Tarifas`,row:n})}}function x(){let e=e=>E(e),n=t=>{let n=new Date;return n.setDate(n.getDate()-t),e(n)};t.pacientes=[{id:u(),nombre:`Celia La Ruffa`,direccion:`Av. San Juan 2845`,piso:`5° B`,empresa:`CareHome`,obraSocial:`OSDE`,numeroAfiliado:`284500/01`,contacto:`María (hija) - 11-4567-8901`,dni:`4567890`,fechaNacimiento:`1942-03-15`,usaOpioides:`Sí`,estado:`Activo`},{id:u(),nombre:`Andrea Saez`,direccion:`Zeballos 1234`,piso:`PB 2`,empresa:`PalCare`,obraSocial:`Swiss Medical`,numeroAfiliado:`SM-98765`,contacto:`Laura Saez - 11-5555-4321`,dni:`12345678`,fechaNacimiento:`1955-08-22`,usaOpioides:`Sí`,estado:`Activo`},{id:u(),nombre:`Roberto Gómez`,direccion:`Rivadavia 4520`,piso:`3° A`,empresa:`CEMIC`,obraSocial:`CEMIC`,numeroAfiliado:`MF-44521`,contacto:`Ana Gómez - 11-4432-1100`,dni:`8123456`,fechaNacimiento:`1948-11-03`,usaOpioides:`No`,estado:`Intermitente`}],t.agenda=[{id:u(),pacienteId:t.pacientes[0].id,diaSemana:`Lunes`,horaInicio:`09:00`,recurrente:!0,semanasSaltadas:[],notasAgenda:`Control de dolor, llevar recetas`},{id:u(),pacienteId:t.pacientes[0].id,diaSemana:`Jueves`,horaInicio:`09:00`,recurrente:!0,semanasSaltadas:[],notasAgenda:`Control semanal`},{id:u(),pacienteId:t.pacientes[1].id,diaSemana:`Martes`,horaInicio:`11:00`,recurrente:!0,semanasSaltadas:[],notasAgenda:`Evaluar ajuste de dosis`},{id:u(),pacienteId:t.pacientes[2].id,diaSemana:`Miércoles`,horaInicio:`10:30`,recurrente:!0,semanasSaltadas:[],notasAgenda:`Control de signos`}],t.evoluciones=[{id:u(),pacienteId:t.pacientes[0].id,fechaVisita:n(3),notas:`Paciente lúcida, dolor controlado.`,evolucionoSistema:!0,firmoPlanillaOS:!1},{id:u(),pacienteId:t.pacientes[1].id,fechaVisita:n(5),notas:`Aumento de dolor nocturno. Ajuste de dosis.`,evolucionoSistema:!0,firmoPlanillaOS:!0}],d()}function S(e){if(!e)return null;let t=new Date(String(e).slice(0,10)+`T00:00:00`);if(isNaN(t.getTime()))return null;let n=new Date,r=n.getFullYear()-t.getFullYear(),i=n.getMonth()-t.getMonth();return(i<0||i===0&&n.getDate()<t.getDate())&&r--,r}function C(e){return e?new Date(e+`T00:00:00`).toLocaleDateString(`es-AR`,{day:`2-digit`,month:`short`,year:`numeric`}):`-`}function te(e){return e?new Date(e+`T00:00:00`).toLocaleDateString(`es-AR`,{day:`2-digit`,month:`short`}):``}function ne(e){return e?new Date(e+`T00:00:00`).toLocaleDateString(`es-AR`,{weekday:`long`,day:`2-digit`,month:`long`,year:`numeric`}):``}function w(e=0){let t=new Date;t.setHours(0,0,0,0);let n=t.getDay(),r=n===0?-6:1-n,i=new Date(t);return i.setDate(t.getDate()+r+e*7),i}function T(e=0){let t=w(e),n=new Date(t);return n.setDate(t.getDate()+6),{lunes:t,domingo:n}}function E(e){let t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,`0`),r=String(e.getDate()).padStart(2,`0`);return t+`-`+n+`-`+r}function D(e,t){let n=String(e||`09:00`).split(`:`),r=parseInt(n[0],10),i=parseInt(n[1],10);if(isNaN(r)||isNaN(i))return`09:00`;let a=r*60+i+t,o=Math.floor(a/60)%24,s=a%60;return`${String(o).padStart(2,`0`)}:${String(s).padStart(2,`0`)}`}function O(e){if(e==null||e===``)return null;let n=String(e).trim();return t.pacientes.find(e=>String(e.id).trim()===n)||null}function k(e,t){return String(e??``).trim()===String(t??``).trim()}function re(e){let n=String(e).trim(),r=0,i=0;return t.agenda.forEach(e=>{String(e.pacienteId).trim()===n&&r++}),t.evoluciones.forEach(e=>{String(e.pacienteId).trim()===n&&i++}),{agenda:r,evoluciones:i}}function A(e,t=`success`){let n={success:`bg-brand-600`,error:`bg-rose-600`,info:`bg-slate-700`},r=document.createElement(`div`);r.className=`toast ${n[t]} text-white px-4 py-3 rounded-xl shadow-lg text-sm font-medium max-w-sm`,r.textContent=e,document.getElementById(`toast-container`).appendChild(r),setTimeout(()=>{r.style.opacity=`0`,r.style.transition=`opacity 0.3s`,setTimeout(()=>r.remove(),300)},2800)}function j(e){if(!e)return!1;let t=String(e).toLowerCase().trim();return t===`osde`||t===`cemic`}function ie(e){return parseInt(e.split(`:`)[0])<13?`mañana`:`tarde`}function M(e){return String(e||``).toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]/g,``)}function N(e){return e==null?``:String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function ae(){let e=new Date().getDay();return e===0?6:e-1}function oe(e){return e?[e.direccion,e.piso].filter(Boolean).join(`, `):``}function se(e){let t=String(e||``).trim();return t?/buenos aires|argentina|\bcaba\b/i.test(t)?t:t+`, Buenos Aires`:``}function ce(e){let t=se(e);return t?`https://www.google.com/maps/search/?api=1&query=`+encodeURIComponent(t):null}function P(e){return ce(oe(e))}function le(e,t){let n=(e||[]).map(se).filter(Boolean);if(n.length===0)return null;let r=se(t),i=r?[r,...n]:n;return i.length===1?ce(i[0]):`https://www.google.com/maps/dir/`+i.map(encodeURIComponent).join(`/`)}function ue(e){return e===`tarde`?t.config.origenTarde||``:t.config.origenManana||``}function F(e){let t=String(ue(e)||``).trim();return t?`Ruta en Google Maps desde: `+t:`Ruta en Google Maps. Sin origen: empieza en el primer paciente.`}function de(e){let n=null;if(t.evoluciones.forEach(t=>{k(t.pacienteId,e)&&t.fechaVisita&&(!n||t.fechaVisita>n)&&(n=t.fechaVisita)}),t.agenda.forEach(t=>{k(t.pacienteId,e)&&t.fechasHechas&&t.fechasHechas.forEach(e=>{(!n||e>n)&&(n=e)})}),!n)return null;let r=new Date;r.setHours(0,0,0,0);let i=new Date(n+`T00:00:00`);return Math.round((r-i)/864e5)}function I(e){let t=de(e);return t===null?`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium whitespace-nowrap">— Sin visitas</span>`:t===0?`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-100 text-brand-700 font-medium whitespace-nowrap">🟢 Hoy</span>`:t<=7?`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-100 text-brand-700 font-medium whitespace-nowrap">🟢 ${t}d sin visita</span>`:t<=14?`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium whitespace-nowrap">🟡 ${t}d sin visita</span>`:`<span class="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-medium whitespace-nowrap">🔴 ${t}d sin visita</span>`}function fe(e,n){return n?t.evoluciones.some(t=>k(t.pacienteId,e)&&String(t.fechaVisita||``).trim()===n):!1}function pe(){return`<span class="text-[9px] px-1.5 py-0.5 rounded-full font-medium bg-brand-100 text-brand-700 whitespace-nowrap">✅ Hecha</span>`}function L(e){let t=fe(e.pacienteId,e.fechaVisitaSemana),n=!t&&(e.fechasHechas||[]).includes(e.fechaVisitaSemana);return{hecha:t||n,manual:n}}function me(e){let t=e.movidoA;return`<div class="flex items-center justify-between gap-1 bg-blue-50 border border-blue-200 rounded-lg px-2 py-1.5 mb-2 text-[10px] text-blue-700">
<span>↪️ Pasó a ${N(t.dia)} ${N(t.hora||``)}</span>
<button data-action="deshacer-movida" data-id="${e.id}" data-semana="${e.semanaMovidaKey||``}" class="text-blue-400 hover:text-blue-700" title="Deshacer">✕</button>
</div>`}function he(e){let n=null;return t.evoluciones.forEach(t=>{k(t.pacienteId,e)&&t.fechaVisita&&(!n||String(t.fechaVisita)>=String(n.fechaVisita))&&(n=t)}),n}function ge(e){let t=he(e.id);if(!t)return``;let n=j(e.obraSocial);return(t.evolucionoSistema?`<span class="text-[10px] px-1.5 py-0.5 rounded bg-brand-100 text-brand-700 font-medium whitespace-nowrap">✅ Sistema</span>`:`<span class="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-medium whitespace-nowrap">⏳ Sistema</span>`)+(n?`<span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-medium whitespace-nowrap">📋 N/A</span>`:t.firmoPlanillaOS?`<span class="text-[10px] px-1.5 py-0.5 rounded bg-brand-100 text-brand-700 font-medium whitespace-nowrap">✅ Planilla</span>`:`<span class="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 font-medium whitespace-nowrap">⏳ Planilla</span>`)}function R(e){if(!e)return null;let t=new Date(e+`T00:00:00`),n=t.getDay(),r=n===0?-6:1-n;return t.setDate(t.getDate()+r),E(t)}function z(e){if(!e)return`bg-slate-100 text-slate-600 border border-slate-200`;let t=String(e).toLowerCase();return t.includes(`carehome`)?`bg-blue-100 text-blue-700 border border-blue-200`:t.includes(`palcare`)?`bg-emerald-100 text-emerald-700 border border-emerald-200`:t.includes(`cemic`)?`bg-purple-100 text-purple-700 border border-purple-200`:t.includes(`chad`)?`bg-orange-100 text-orange-700 border border-orange-200`:t.includes(`privado`)?`bg-amber-100 text-amber-700 border border-amber-200`:`bg-slate-100 text-slate-600 border border-slate-200`}function B(e){let n=w(e),r=E(n),a=[];return t.agenda.forEach(e=>{let t=m(e.horaInicio||`09:00`),o=e.recurrente!==!1,s=!1,c=null;if(o){let t=e.intervaloSemanas||1,n=!0;if(t>1&&e.fechaInicioRecurrencia){let i=new Date(String(e.fechaInicioRecurrencia).trim()+`T00:00:00`),a=new Date(r+`T00:00:00`),o=Math.round((a-i)/6048e5);n=o>=0&&o%t===0}if(n){let t=(e.semanasSaltadas||[]).find(e=>(typeof e==`string`?e:e.semana)===r);t?typeof t==`object`&&t.movidoA&&(c=t.movidoA):s=!0}}else e.semanaEspecifica&&String(e.semanaEspecifica).trim()===r&&(s=!0);let l=i[e.diaSemana];if(l===void 0)return;let u=new Date(n);u.setDate(n.getDate()+l),s?a.push({...e,pacienteId:String(e.pacienteId).trim(),horaInicio:t,recurrente:o,fechaVisitaSemana:E(u),horaFinVisita:D(t,30),horaLibre:D(t,45),turno:ie(t),movida:!1}):c&&a.push({...e,pacienteId:String(e.pacienteId).trim(),horaInicio:t,recurrente:o,fechaVisitaSemana:E(u),turno:ie(t),movida:!0,movidoA:c,semanaMovidaKey:r})}),a}function _e(e){return c===`comprimida`||c!==`completa`&&e>5}function ve(e,t,n){let r=S(t.fechaNacimiento),i=e.turno===`mañana`?`bg-amber-50 border-amber-200`:`bg-indigo-50 border-indigo-200`,a=z(t.empresa),o=e.fechaVisitaSemana<=n,s=o?L(e):{hecha:!1,manual:!1};return`<div class="flex items-start justify-between gap-1 mb-1.5">
<div class="flex-1 min-w-0">
<div class="flex items-center gap-1.5">
<span class="time-badge text-sm font-bold text-brand-700">${e.horaInicio}</span>
<span class="text-[10px] text-slate-400">→</span>
<span class="time-badge text-[11px] text-slate-500">${e.horaLibre}</span>
${e.recurrente?`<span class="text-[10px] text-slate-400" title="Recurrente">🔁</span>`:`<span class="text-[10px] text-indigo-500" title="Visita puntual">📌</span>`}
</div>
<p class="text-xs font-semibold text-slate-800 leading-tight truncate mt-0.5">${N(t.nombre)}</p>
${r===null?``:`<p class="text-[10px] text-slate-500">${r} años</p>`}
</div>
<div class="flex flex-col items-end gap-1">
<span class="text-[9px] px-1.5 py-0.5 rounded-full font-medium ${a}">${N(t.empresa||`Sin empresa`)}</span>
${t.usaOpioides===`Sí`?`<span class="text-[10px]" title="Usa opioides">💊</span>`:``}
<span class="text-[9px] px-1 py-0.5 rounded ${i} font-medium">${e.turno===`mañana`?`🌅`:`🌇`}</span>
</div>
</div>
${s.hecha?`<div class="mb-1 flex items-center gap-1">${pe()}${s.manual?`<button data-action="desmarcar-hecha" data-id="${e.id}" data-fecha="${e.fechaVisitaSemana}" title="Quitar marca" class="text-[9px] text-slate-300 hover:text-slate-500">✕</button>`:``}</div>`:o?`<button data-action="marcar-hecha" data-id="${e.id}" data-fecha="${e.fechaVisitaSemana}" class="mb-1 text-[9px] px-1.5 py-0.5 rounded-full border border-slate-200 text-slate-400 hover:border-brand-300 hover:text-brand-600 transition">☐ Marcar hecha</button>`:``}
<div class="text-[10px] text-slate-500 space-y-0.5">
<p>🏠 <span class="truncate">${N(t.direccion||`-`)}</span>${t.piso?` · `+N(t.piso):``}</p>
${e.notasAgenda?`<p class="italic">📝 ${N(e.notasAgenda)}</p>`:``}
</div>
<div class="flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition">
<button data-action="evolucionar" data-agenda="${e.id}" data-fecha="${e.fechaVisitaSemana}" class="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-[10px] font-medium py-1 rounded">📝 Pendientes</button>
${P(t)?`<a href="${P(t)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Cómo llegar" class="px-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] rounded flex items-center justify-center">📍</a>`:``}
<button data-action="abrir-mover" data-id="${e.id}" title="Mover a otro día" class="px-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] rounded">↪️</button>
<button data-action="edit-agenda" data-id="${e.id}" class="px-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] rounded">✏️</button>
</div>`}function ye(e,t,n){let r=e.fechaVisitaSemana<=n?L(e):{hecha:!1,manual:!1},i=r.hecha?`text-slate-400 line-through`:`text-slate-800`;return`<div class="flex items-center gap-2 px-2.5 py-1.5 mb-1 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-brand-300 cursor-pointer transition" data-action="toggle-card-expandida" data-id="${e.id}">
<span class="time-badge text-[10px] font-semibold text-brand-700 flex-shrink-0">${e.horaInicio}</span>
<span class="text-[11px] ${i} truncate flex-1">${N(t.nombre)}</span>
${r.hecha?`<span class="text-[9px] flex-shrink-0" title="Marcada como hecha">✅</span>`:``}
${t.usaOpioides===`Sí`?`<span class="text-[9px] flex-shrink-0" title="Usa opioides">💊</span>`:``}
<span class="text-slate-300 text-[9px] flex-shrink-0">▾</span>
</div>`}function be(){if(!document.getElementById(`btn-toggle-vista`))return;let e=document.getElementById(`btn-toggle-vista-icon`),t=document.getElementById(`btn-toggle-vista-label`);c===`comprimida`?(e.textContent=`🗂️`,t.textContent=`Desplegar todo`):(e.textContent=`📋`,t.textContent=`Comprimir todo`)}function V(){be();let{lunes:e,domingo:r}=T(a),i=new Date;i.setHours(0,0,0,0);let o=E(i),s=document.getElementById(`agenda-header`);s.innerHTML=n.map((t,n)=>{let r=new Date(e);r.setDate(e.getDate()+n);let i=E(r)===o;return`<div class="p-3 text-center border-l border-slate-200 ${i?`bg-brand-50`:`bg-slate-50`}">
<p class="text-[10px] font-semibold text-slate-500 uppercase">${t.slice(0,3)}</p>
<p class="text-sm font-bold ${i?`text-brand-700`:`text-slate-800`}">${r.getDate()}</p>
</div>`}).join(``);let c=B(a),u=new Map(t.pacientes.map(e=>[String(e.id).trim(),e])),d=document.getElementById(`agenda-grid`),f={};n.forEach(e=>f[e]=[]),c.forEach(e=>{f[e.diaSemana]&&f[e.diaSemana].push(e)}),n.forEach(e=>f[e].sort((e,t)=>(e.horaInicio||``).localeCompare(t.horaInicio||``))),d.innerHTML=n.map((t,n)=>{let r=new Date(e);r.setDate(e.getDate()+n);let i=E(r)===o,a=f[t],s=a.filter(e=>!e.movida),c=a.filter(e=>e.movida),d=`<div class="day-column p-2 ${i?`today-col`:`bg-white`}">`;if(c.forEach(e=>{d+=me(e)}),s.length===0)d+=`<button data-action="add-agenda" data-dia="${t}" class="w-full min-h-[80px] border-2 border-dashed border-slate-200 rounded-lg text-slate-300 hover:border-brand-300 hover:text-brand-500 text-xs transition flex items-center justify-center">+ visita</button>`;else{let e=s.filter(e=>e.turno===`mañana`).length,n=s.filter(e=>e.turno===`tarde`).length;(e>0||n>0)&&(d+=`<div class="flex gap-1 mb-2 text-[9px]">
${e>0?`<button type="button" data-action="ruta-turno" data-dia="${t}" data-turno="mañana" title="${N(F(`mañana`))}" class="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded px-1 py-0.5 text-center font-medium">🌅 ${e} 🗺️</button>`:``}
${n>0?`<button type="button" data-action="ruta-turno" data-dia="${t}" data-turno="tarde" title="${N(F(`tarde`))}" class="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded px-1 py-0.5 text-center font-medium">🌇 ${n} 🗺️</button>`:``}
</div>`);let r=_e(s.length);s.forEach(e=>{let t=u.get(String(e.pacienteId).trim())||null;if(!t){d+=`<div class="visit-card bg-rose-50 border border-rose-200 rounded-lg p-2.5 mb-2">
<div class="flex items-center gap-2 mb-1">
<span class="text-rose-600 text-lg">⚠️</span>
<div><p class="text-xs font-bold text-rose-800">Paciente no encontrado</p><p class="text-[10px] text-rose-600">ID: ${N(e.pacienteId)}</p></div>
</div>
<button data-action="delete-agenda" data-id="${e.id}" class="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-medium py-1.5 rounded">🗑️ Eliminar visita huérfana</button>
</div>`;return}(l.has(e.id)?!r:r)?d+=ye(e,t,o):d+=`<div class="border border-slate-200 rounded-lg mb-2 bg-white overflow-hidden">
<div class="flex justify-end px-2 pt-1.5">
<button data-action="toggle-card-expandida" data-id="${e.id}" class="text-[9px] text-slate-400 hover:text-slate-600 flex items-center gap-0.5">▴ comprimir</button>
</div>
<div class="visit-card p-2.5 pt-0 cursor-pointer group relative" data-action="ver-agenda" data-id="${e.id}">
${ve(e,t,o)}
</div>
</div>`}),d+=`<button data-action="add-agenda" data-dia="${t}" class="w-full py-1.5 border border-dashed border-slate-200 rounded-lg text-slate-400 hover:border-brand-300 hover:text-brand-500 text-[10px] transition">+ agregar</button>`}return d+=`</div>`,d}).join(``)}function xe(){let{lunes:e}=T(a),i=new Date;i.setHours(0,0,0,0);let c=E(i),l=ae(),u=a;s[u]===void 0?(o===null||a!==0)&&(o=a===0?l:0):o=s[u],(o<0||o>6)&&(o=0),s[u]=o;let d=B(a),f=new Map(t.pacientes.map(e=>[String(e.id).trim(),e])),p={};n.forEach(e=>p[e]=0),d.forEach(e=>{!e.movida&&p[e.diaSemana]!==void 0&&p[e.diaSemana]++});let m=document.getElementById(`mobile-day-tabs`);m.innerHTML=n.map((t,n)=>{let i=new Date(e);i.setDate(e.getDate()+n);let a=E(i)===c,s=n===o,l=p[t];return`<button data-action="select-day-mobile" data-day="${n}" class="day-tab ${s?`active`:`bg-slate-50 text-slate-600 hover:bg-slate-100`} ${a&&!s?`today`:``} rounded-lg py-2 px-1 flex flex-col items-center gap-0.5 transition">
<span class="text-[10px] font-bold uppercase">${r[n]}</span>
<span class="text-sm font-bold">${i.getDate()}</span>
${l>0?`<span class="text-[9px] ${s?`text-white/80`:`text-brand-600`} font-semibold">${l}</span>`:`<span class="text-[9px] text-slate-300">·</span>`}
</button>`}).join(``);let h=n[o],g=d.filter(e=>e.diaSemana===h).sort((e,t)=>(e.horaInicio||``).localeCompare(t.horaInicio||``)),_=g.filter(e=>!e.movida),v=g.filter(e=>e.movida),y=document.getElementById(`mobile-day-content`),b=new Date(e);b.setDate(e.getDate()+o);let ee=E(b)===c,x=_.filter(e=>e.turno===`mañana`),S=_.filter(e=>e.turno===`tarde`),C=`<div class="flex items-center justify-between mb-4">
<div>
<h3 class="text-base font-bold text-slate-800">${h} ${b.getDate()}/${b.getMonth()+1}</h3>
<p class="text-xs text-slate-500">${ee?`📍 Hoy`:_.length+` visita`+(_.length===1?``:`s`)}</p>
</div>
<button data-action="add-agenda" data-dia="${h}" class="bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1">
<span>➕</span> Agregar
</button>
</div>`;v.forEach(e=>{C+=me(e)}),_.length===0?C+=`<div class="text-center py-8 text-slate-400">
<p class="text-3xl mb-2">📭</p>
<p class="text-sm">Sin visitas este día</p>
<button data-action="add-agenda" data-dia="${h}" class="mt-3 text-xs text-brand-600 hover:text-brand-700 font-medium border border-brand-200 px-4 py-2 rounded-lg bg-brand-50">+ Agendar una visita</button>
</div>`:(x.length>0&&(C+=`<div class="mb-4">
<div class="flex items-center justify-between mb-2 gap-2">
<p class="text-xs font-bold text-amber-700 uppercase tracking-wide flex items-center gap-1"><span>🌅</span> Mañana <span class="text-slate-400 font-normal">(${x.length})</span></p>
<button type="button" data-action="ruta-turno" data-dia="${h}" data-turno="mañana" title="${N(F(`mañana`))}" class="text-[11px] font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg">🗺️ Ruta</button>
</div>
<div class="space-y-2">${x.map(e=>Se(e,f)).join(``)}</div>
</div>`),S.length>0&&(C+=`<div>
<div class="flex items-center justify-between mb-2 gap-2">
<p class="text-xs font-bold text-indigo-700 uppercase tracking-wide flex items-center gap-1"><span>🌇</span> Tarde <span class="text-slate-400 font-normal">(${S.length})</span></p>
<button type="button" data-action="ruta-turno" data-dia="${h}" data-turno="tarde" title="${N(F(`tarde`))}" class="text-[11px] font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-2 rounded-lg">🗺️ Ruta</button>
</div>
<div class="space-y-2">${S.map(e=>Se(e,f)).join(``)}</div>
</div>`),C+=`<button data-action="add-agenda" data-dia="${h}" class="w-full mt-4 py-2.5 border border-dashed border-brand-300 text-brand-600 rounded-lg text-xs font-medium hover:bg-brand-50 transition flex items-center justify-center gap-1">
<span>➕</span> Agregar otra visita a este día
</button>`),y.innerHTML=C}function Se(e,t=null){let n=t?t.get(String(e.pacienteId).trim())||null:O(e.pacienteId);if(!n)return`<div class="border border-rose-200 bg-rose-50 rounded-xl p-3 mb-2">
<p class="text-xs font-bold text-rose-800 mb-1">⚠️ Paciente no encontrado</p>
<p class="text-[11px] text-rose-600 mb-2">ID: ${N(e.pacienteId)}</p>
<button data-action="delete-agenda" data-id="${e.id}" class="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-medium py-1.5 rounded">🗑️ Eliminar</button>
</div>`;let r=S(n.fechaNacimiento),i=e.turno===`mañana`?`border-amber-200 bg-amber-50/30`:`border-indigo-200 bg-indigo-50/30`,a=z(n.empresa),o=E(new Date),s=e.fechaVisitaSemana<=o,c=s?L(e):{hecha:!1,manual:!1};return`<div class="border ${i} rounded-xl p-3 cursor-pointer hover:shadow-md transition" data-action="ver-agenda" data-id="${e.id}">
<div class="flex items-start justify-between gap-2 mb-2">
<div class="flex items-center gap-2">
<span class="time-badge text-lg font-bold text-brand-700">${e.horaInicio}</span>
<span class="text-xs text-slate-400">→</span>
<span class="time-badge text-sm text-slate-500">${e.horaLibre}</span>
${e.recurrente?`<span class="text-xs text-slate-400" title="Recurrente">🔁</span>`:`<span class="text-xs text-indigo-500" title="Visita puntual">📌</span>`}
</div>
<div class="flex items-center gap-1">
<span class="text-[9px] px-1.5 py-0.5 rounded-full font-medium ${a}">${N(n.empresa||`Sin empresa`)}</span>
${n.usaOpioides===`Sí`?`<span class="text-xs" title="Usa opioides">💊</span>`:``}
</div>
</div>
${c.hecha?`<div class="mb-1.5 flex items-center gap-1">${pe()}${c.manual?`<button data-action="desmarcar-hecha" data-id="${e.id}" data-fecha="${e.fechaVisitaSemana}" title="Quitar marca" class="text-[10px] text-slate-300 hover:text-slate-500">✕</button>`:``}</div>`:s?`<button data-action="marcar-hecha" data-id="${e.id}" data-fecha="${e.fechaVisitaSemana}" class="mb-1.5 text-[10px] px-2 py-0.5 rounded-full border border-slate-200 text-slate-400 hover:border-brand-300 hover:text-brand-600 transition">☐ Marcar hecha</button>`:``}
<p class="text-sm font-bold text-slate-800 leading-tight">${N(n.nombre)}</p>
<p class="text-xs text-slate-500 mt-0.5">${r===null?``:r+` años · `}${N(n.obraSocial||``)}</p>
<p class="text-xs text-slate-600 mt-2 flex items-start gap-1">
<span class="flex-shrink-0">🏠</span>
<span>${N(n.direccion||`-`)}${n.piso?` · `+N(n.piso):``}</span>
</p>
${n.contacto?`<p class="text-xs text-slate-600 mt-0.5 flex items-start gap-1"><span class="flex-shrink-0">📞</span><span>${N(n.contacto)}</span></p>`:``}
${e.notasAgenda?`<p class="text-xs text-slate-500 mt-2 italic bg-white/50 rounded px-2 py-1">📝 ${N(e.notasAgenda)}</p>`:``}
<div class="flex gap-2 mt-3">
<button data-action="abrir-mover" data-id="${e.id}" title="Mover a otro día" class="px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-lg flex items-center justify-center">↪️</button>
<button data-action="evolucionar" data-agenda="${e.id}" data-fecha="${e.fechaVisitaSemana}" class="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-xs font-medium py-2 rounded-lg">📝 Pendientes</button>
${P(n)?`<a href="${P(n)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-lg flex items-center justify-center">📍</a>`:``}
<button data-action="edit-agenda" data-id="${e.id}" class="px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs rounded-lg">✏️</button>
</div>
</div>`}function Ce(){let e=document.getElementById(`pending-panel`),n=B(a),r=new Map;n.forEach(e=>{if(e.movida)return;let t=String(e.pacienteId).trim();r.set(t,(r.get(t)||0)+1)});let i=new Set(r.keys()),o=t.pacientes.filter(e=>e.estado!==`Fuera de seguimiento`);if(o.length===0){e.innerHTML=``;return}let s=document.getElementById(`filter-pending-empresa`),c=s?s.value:``,l=`<option value="">Todas las empresas</option>`+[...new Set(o.map(e=>e.empresa).filter(Boolean))].sort().map(e=>`<option value="${N(e)}" ${e===c?`selected`:``}>${N(e)}</option>`).join(``),u=o.filter(e=>!i.has(String(e.id).trim())),d=o.filter(e=>i.has(String(e.id).trim()));c&&(u=u.filter(e=>e.empresa===c),d=d.filter(e=>e.empresa===c));let f=[...u.sort((e,t)=>String(e.nombre||``).localeCompare(String(t.nombre||``))),...d.sort((e,t)=>String(e.nombre||``).localeCompare(String(t.nombre||``)))],{lunes:p,domingo:m}=T(a),h=`<div class="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3">
<div>
<h3 class="text-sm font-bold text-slate-800">👥 Pacientes activos ${a===0?`esta semana`:`del ${p.toLocaleDateString(`es-AR`,{day:`2-digit`,month:`short`})} al ${m.toLocaleDateString(`es-AR`,{day:`2-digit`,month:`short`})}`}</h3>
<p class="text-xs text-slate-500 mt-0.5">
${u.length===0?`<span class="text-brand-600 font-medium">✓ Todos los pacientes tienen visita agendada</span>`:`<span class="text-amber-600 font-medium">${u.length} sin agenda</span> · ${d.length} con visita`}
</p>
</div>
<select id="filter-pending-empresa" class="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium focus:outline-none focus:border-brand-500 bg-white">
${l}
</select>
</div>
<div class="divide-y divide-slate-100 max-h-96 overflow-y-auto scrollbar-thin">`;f.forEach(e=>{let t=String(e.id).trim(),n=i.has(t),a=r.get(t)||0,o=z(e.empresa);h+=`<div class="pending-item ${n?`done`:``} flex items-center gap-3 p-3 hover:bg-slate-50 transition ${n?``:`cursor-pointer`}" ${n?``:`data-action="add-agenda-paciente-pending" data-id="${e.id}"`}>
<div class="flex-shrink-0 w-8 h-8 rounded-full ${n?`bg-brand-100 text-brand-700`:`bg-amber-100 text-amber-700`} flex items-center justify-center text-xs font-bold">
${n?`✓`:String(e.nombre||`?`).charAt(0).toUpperCase()}
</div>
<div class="flex-1 min-w-0">
<p class="pending-name text-sm font-medium text-slate-800 truncate">${N(e.nombre)}</p>
<p class="text-xs text-slate-500 truncate flex items-center gap-1">
<span class="flex-shrink-0">🏠</span>
<span class="truncate">${N(e.direccion||`Sin dirección`)}${e.piso?` · `+N(e.piso):``}</span>
${P(e)?`<a href="${P(e)}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="flex-shrink-0 text-brand-500 hover:text-brand-700" title="Cómo llegar">📍</a>`:``}
</p>
<div class="mt-1">${I(e.id)}</div>
</div>
<div class="flex-shrink-0 flex flex-col items-end gap-1">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium ${o}">${N(e.empresa||`Sin empresa`)}</span>
${n?`<span class="text-[10px] text-slate-400">${a} visita${a>1?`s`:``}</span>`:`<span class="text-xs text-brand-600 font-medium whitespace-nowrap">+ Agendar</span>`}
</div>
</div>`}),h+=`</div>`,e.innerHTML=h,document.getElementById(`filter-pending-empresa`)?.addEventListener(`change`,Ce)}function H(){let{lunes:e,domingo:n}=T(a),r=a===0;document.getElementById(`agenda-week-label`).textContent=`Semana del ${e.toLocaleDateString(`es-AR`,{day:`2-digit`,month:`short`})} al ${n.toLocaleDateString(`es-AR`,{day:`2-digit`,month:`short`,year:`numeric`})}`,document.getElementById(`agenda-week-sublabel`).textContent=r?`📍 Semana actual`:a>0?`+${a} semana${a>1?`s`:``}`:`${Math.abs(a)} semana${a<-1?`s`:``} atrás`,V(),xe(),Ce();let i=B(a).filter(e=>!e.movida),o=i.length,s=i.length*45;document.getElementById(`stat-week`).textContent=o,document.getElementById(`stat-hours`).textContent=`${Math.floor(s/60)}h${s%60?` `+s%60+`m`:``}`,document.getElementById(`stat-active`).textContent=t.pacientes.filter(e=>e.estado===`Activo`).length,document.getElementById(`stat-opioides`).textContent=t.pacientes.filter(e=>e.usaOpioides===`Sí`).length}function we(){let e=[...new Set(t.pacientes.map(e=>e.empresa).filter(Boolean))].sort(),n=[...new Set(t.pacientes.map(e=>e.obraSocial).filter(Boolean))].sort(),r=document.getElementById(`filter-empresa`),i=document.getElementById(`filter-os`);if(r){let t=r.value;r.innerHTML=`<option value="">Todas las empresas</option>`+e.map(e=>`<option value="${N(e)}" ${e===t?`selected`:``}>${N(e)}</option>`).join(``)}if(i){let e=i.value;i.innerHTML=`<option value="">Todas las Obras Sociales</option>`+n.map(t=>`<option value="${N(t)}" ${t===e?`selected`:``}>${N(t)}</option>`).join(``)}}function Te(){let e=(document.getElementById(`search-pacientes`).value||``).toLowerCase().trim(),n=document.getElementById(`filter-estado`).value,r=document.getElementById(`filter-empresa`).value,i=document.getElementById(`filter-os`).value;return t.pacientes.filter(t=>n&&t.estado!==n||r&&t.empresa!==r||i&&t.obraSocial!==i?!1:!e||String(t.nombre||``).toLowerCase().includes(e)||String(t.dni||``).toLowerCase().includes(e)||String(t.obraSocial||``).toLowerCase().includes(e)||String(t.empresa||``).toLowerCase().includes(e)||String(t.contacto||``).toLowerCase().includes(e)||String(t.direccion||``).toLowerCase().includes(e))}function U(){we();let e=Te(),n=document.getElementById(`pacientes-container`);if(e.length===0){n.innerHTML=`<div class="text-center py-12 text-slate-400"><p class="text-4xl mb-2">🔍</p><p class="text-sm">No se encontraron pacientes</p></div>`;return}n.innerHTML=t.viewMode===`list`?De(e):Ee(e)}function Ee(e){return`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${e.map(e=>{let t=S(e.fechaNacimiento),n=e.estado===`Activo`?`bg-brand-100 text-brand-700 border-brand-200`:e.estado===`Intermitente`?`bg-amber-100 text-amber-700 border-amber-200`:`bg-slate-100 text-slate-500 border-slate-200`,{agenda:r,evoluciones:i}=re(e.id),a=j(e.obraSocial)?`<span class="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded">📋 ${N(e.obraSocial)}</span>`:``,o=z(e.empresa);return`<div class="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition cursor-pointer" data-action="ver-paciente" data-id="${e.id}">
<div class="flex items-start justify-between gap-3 mb-3">
<div class="flex-1 min-w-0"><h3 class="font-bold text-slate-800 truncate">${N(e.nombre)}</h3><p class="text-xs text-slate-500">${N(e.dni||`Sin DNI`)} ${t===null?``:`· `+t+` años`}</p></div>
<span class="text-xs font-medium px-2 py-1 rounded-full border ${n} whitespace-nowrap">${e.estado}</span>
</div>
${e.estado===`Fuera de seguimiento`?``:`<div class="flex flex-wrap items-center gap-1.5 mb-3">${I(e.id)}${ge(e)}</div>`}
<div class="space-y-1.5 text-xs text-slate-600">
<p class="truncate">🏠 ${N(e.direccion||`-`)} ${e.piso?`· `+N(e.piso):``}</p>
<p class="truncate flex items-center gap-2">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium ${o}">${N(e.empresa||`Sin empresa`)}</span>
<span>${N(e.obraSocial||`-`)}</span> ${e.numeroAfiliado?`· `+N(e.numeroAfiliado):``}
</p>
<p class="truncate">📞 ${N(e.contacto||`-`)}</p>
</div>
<div class="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
<div class="flex gap-3 text-xs"><span class="text-slate-500">🔁 ${r}</span><span class="text-slate-500">📝 ${i}</span>${a}</div>
${e.usaOpioides===`Sí`?`<span class="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-medium">💊 Opioides</span>`:``}
</div></div>`}).join(``)}</div>`}function De(e){return`<div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-sm">
<thead class="bg-slate-50 border-b border-slate-200 sticky top-0">
<tr>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Paciente</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden md:table-cell">DNI / Edad</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden lg:table-cell">Dirección</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden md:table-cell">Empresa / OS</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Estado</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">Última visita</th>
<th class="text-center px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">🔁</th>
<th class="text-center px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">📝</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100">
${e.map(e=>{let t=S(e.fechaNacimiento),n=e.estado===`Activo`?`bg-brand-100 text-brand-700`:e.estado===`Intermitente`?`bg-amber-100 text-amber-700`:`bg-slate-100 text-slate-500`,{agenda:r,evoluciones:i}=re(e.id),a=z(e.empresa);return`<tr class="lista-row cursor-pointer hover:bg-slate-50" data-action="ver-paciente" data-id="${e.id}">
<td class="px-4 py-3">
<div class="flex items-center gap-2">
<div class="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-bold flex-shrink-0">${String(e.nombre||`?`).charAt(0).toUpperCase()}</div>
<div class="min-w-0">
<p class="font-semibold text-slate-800 truncate">${N(e.nombre)}</p>
<p class="text-[11px] text-slate-500 truncate md:hidden">${N(e.dni||``)}${t?` · `+t+`a`:``} · ${N(e.obraSocial||``)}</p>
</div>
${e.usaOpioides===`Sí`?`<span class="text-xs" title="Usa opioides">💊</span>`:``}
</div>
</td>
<td class="px-4 py-3 text-xs text-slate-600 hidden md:table-cell">${N(e.dni||`-`)}${t===null?``:`<br><span class="text-slate-400">`+t+` años</span>`}</td>
<td class="px-4 py-3 text-xs text-slate-600 hidden lg:table-cell max-w-[200px] truncate" title="${N((e.direccion||``)+(e.piso?` · `+e.piso:``))}">${N(e.direccion||`-`)}${e.piso?` · `+N(e.piso):``}</td>
<td class="px-4 py-3 text-xs hidden md:table-cell">
<div class="flex flex-col gap-1">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium w-fit ${a}">${N(e.empresa||`Sin empresa`)}</span>
<span class="text-slate-700">${N(e.obraSocial||`-`)}</span>
</div>
</td>
<td class="px-4 py-3"><span class="text-[11px] font-medium px-2 py-0.5 rounded-full ${n}">${e.estado}</span></td>
<td class="px-4 py-3 hidden sm:table-cell">${e.estado===`Fuera de seguimiento`?``:I(e.id)}</td>
<td class="px-4 py-3 text-center text-xs text-slate-600 hidden sm:table-cell">${r}</td>
<td class="px-4 py-3 text-center text-xs text-slate-600 hidden sm:table-cell">${i}</td>
</tr>`}).join(``)}
</tbody>
</table>
</div>
<div class="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">
${e.length} paciente${e.length===1?``:`s`}
</div>
</div>`}function Oe(){let e=(document.getElementById(`search-visitas`).value||``).toLowerCase().trim(),n=document.getElementById(`visitas-list`),r=new Map(t.pacientes.map(e=>[String(e.id).trim(),e])),i=[...t.evoluciones].sort((e,t)=>(t.fechaVisita||``).localeCompare(e.fechaVisita||``)).map(e=>({e,p:r.get(String(e.pacienteId).trim())||null})).filter(({e:t,p:n})=>!e||String(n?.nombre||``).toLowerCase().includes(e)||String(t.notas||``).toLowerCase().includes(e));if(i.length===0){n.innerHTML=`<div class="text-center py-12 text-slate-400"><p class="text-4xl mb-2">📝</p><p class="text-sm">No hay pendientes cargados</p></div>`;return}n.innerHTML=i.map(({e,p:t})=>{let n=j(t?.obraSocial);return`<div class="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition">
<div class="flex flex-wrap items-start justify-between gap-3 mb-3">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">${String(t?.nombre||`?`).charAt(0).toUpperCase()}</div>
<div><h4 class="font-semibold text-slate-800">${N(t?.nombre||`Paciente eliminado`)}</h4><p class="text-xs text-slate-500">📅 ${C(e.fechaVisita)} ${t?.obraSocial?`· `+N(t.obraSocial):``}</p></div>
</div>
<div class="flex gap-2">
<button data-action="toggle-sistema" data-id="${e.id}" title="Tocar para marcar/desmarcar" class="text-xs px-2 py-1 rounded-full transition ${e.evolucionoSistema?`bg-brand-100 text-brand-700 hover:bg-brand-200`:`bg-slate-100 text-slate-500 hover:bg-slate-200`}">${e.evolucionoSistema?`✓ Sistema`:`○ Sistema`}</button>
${n?`<span class="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600" title="OSDE/CEMIC no requiere planilla">📋 N/A</span>`:`<button data-action="toggle-firma" data-id="${e.id}" title="Tocar para marcar/desmarcar" class="text-xs px-2 py-1 rounded-full transition ${e.firmoPlanillaOS?`bg-brand-100 text-brand-700 hover:bg-brand-200`:`bg-slate-100 text-slate-500 hover:bg-slate-200`}">${e.firmoPlanillaOS?`✓ Firma`:`○ Firma`}</button>`}
</div>
</div>
<p class="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed">${e.notas?N(e.notas):`<em class="text-slate-400">Sin notas</em>`}</p>
<div class="flex justify-end mt-3 pt-3 border-t border-slate-100"><button data-action="delete-evolucion" data-id="${e.id}" class="text-xs text-rose-600 hover:text-rose-700 font-medium">Eliminar</button></div>
</div>`}).join(``)}function W(){H(),U(),Oe(),K()}let G=0;function ke(e=0){let t=new Date,n=new Date(t.getFullYear(),t.getMonth()+e,1),r=n.getFullYear(),i=n.getMonth(),a=n.toLocaleDateString(`es-AR`,{month:`long`,year:`numeric`});return a=a.charAt(0).toUpperCase()+a.slice(1),{year:r,month:i,label:a}}function Ae(e,t,n){if(!e)return!1;let r=new Date(String(e).trim()+`T00:00:00`);return!isNaN(r.getTime())&&r.getFullYear()===t&&r.getMonth()===n}function je(e){let{year:n,month:r}=ke(e),i=[],a=new Set;return t.evoluciones.forEach(e=>{if(!Ae(e.fechaVisita,n,r))return;let t=String(e.pacienteId).trim(),o=String(e.fechaVisita).trim(),s=t+`|`+o;a.has(s)||(a.add(s),i.push({pacienteId:t,fecha:o,origen:`evolucion`,evolucionoSistema:e.evolucionoSistema,firmoPlanillaOS:e.firmoPlanillaOS}))}),t.agenda.forEach(e=>{if(!e.fechasHechas)return;let t=String(e.pacienteId).trim();e.fechasHechas.forEach(e=>{if(e=String(e).trim(),!Ae(e,n,r))return;let o=t+`|`+e;a.has(o)||(a.add(o),i.push({pacienteId:t,fecha:e,origen:`manual`,evolucionoSistema:null,firmoPlanillaOS:null}))})}),i}function Me(e){let n=t.tarifas.find(t=>t.empresa===e);return n&&Number(n.valorPorVisita)||0}function Ne(e,n){let r=Number(n)||0,i=t.tarifas.findIndex(t=>t.empresa===e),a;i>=0?(t.tarifas[i].valorPorVisita=r,a=t.tarifas[i]):(a={empresa:e,valorPorVisita:r},t.tarifas.push(a)),d(),ee(a)}function Pe(e){return new Intl.NumberFormat(`es-AR`,{style:`currency`,currency:`ARS`,maximumFractionDigits:0}).format(e||0)}function K(){let{label:e}=ke(G);document.getElementById(`planilla-mes-label`).textContent=e;let n=new Map(t.pacientes.map(e=>[String(e.id).trim(),e])),r=je(G).map(e=>({v:e,p:n.get(e.pacienteId)||null})),i=new Set(t.pacientes.map(e=>e.empresa).filter(Boolean));t.tarifas.forEach(e=>{e.empresa&&i.add(e.empresa)});let a=[...i].sort(),o={};a.forEach(e=>o[e]=0);let s=0;r.forEach(({p:e})=>{let t=e?.empresa;t&&o[t]!==void 0?o[t]++:s++});let c=document.getElementById(`planilla-cards`),l=0,u=a.map(e=>{let t=o[e]||0,n=Me(e),r=t*n;return l+=r,`<div class="bg-white rounded-xl border border-slate-200 p-3">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium ${z(e)}">${N(e)}</span>
<p class="text-xl font-bold text-slate-800 mt-2">${t} <span class="text-xs font-normal text-slate-400">visitas</span></p>
<div class="flex items-center gap-1 mt-2">
<span class="text-[11px] text-slate-400">$</span>
<input data-tarifa-empresa="${N(e)}" type="number" min="0" step="500" value="${n}" class="w-full px-2 py-1 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-brand-500">
</div>
<p class="text-xs font-semibold text-brand-700 mt-1.5">${Pe(r)}</p>
</div>`}).join(``);s>0&&(u+=`<div class="bg-white rounded-xl border border-slate-200 p-3">
<span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium bg-slate-100 text-slate-600 border border-slate-200">Sin empresa</span>
<p class="text-xl font-bold text-slate-800 mt-2">${s} <span class="text-xs font-normal text-slate-400">visitas</span></p>
<p class="text-[11px] text-slate-400 mt-2">Cargá la empresa del paciente para facturar</p>
</div>`),u+=`<div class="bg-brand-600 rounded-xl p-3 text-white">
<span class="text-[10px] font-medium opacity-80">Total del mes</span>
<p class="text-xl font-bold mt-2">${r.length} <span class="text-xs font-normal opacity-80">visitas</span></p>
<p class="text-xs font-semibold mt-6">${Pe(l)}</p>
</div>`,c.innerHTML=u,c.querySelectorAll(`[data-tarifa-empresa]`).forEach(e=>{e.addEventListener(`change`,()=>{Ne(e.dataset.tarifaEmpresa,e.value),K()})});let d=document.getElementById(`planilla-filter-empresa`),f=d.value;d.innerHTML=`<option value="">Todas las empresas</option>`+a.map(e=>`<option value="${N(e)}" ${e===f?`selected`:``}>${N(e)}</option>`).join(``),d.value=f;let p=document.getElementById(`planilla-solo-pendientes`).checked,m=r.filter(({p:e})=>!f||e?.empresa===f);p&&(m=m.filter(({v:e,p:t})=>{if(e.origen===`manual`)return!1;let n=j(t?.obraSocial);return!e.evolucionoSistema||!n&&!e.firmoPlanillaOS})),m.sort((e,t)=>String(t.v.fecha||``).localeCompare(String(e.v.fecha||``)));let h=document.getElementById(`planilla-table-wrap`);h.innerHTML=m.length===0?`<div class="text-center py-12 text-slate-400"><p class="text-4xl mb-2">📭</p><p class="text-sm">Sin visitas para este filtro</p></div>`:`<div class="overflow-x-auto">
<table class="w-full text-sm">
<thead class="bg-slate-50 border-b border-slate-200">
<tr>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Fecha</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Paciente</th>
<th class="text-left px-4 py-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">Empresa</th>
<th class="text-center px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Sistema</th>
<th class="text-center px-4 py-3 text-xs font-semibold text-slate-600 uppercase">Firma</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100">
${m.map(({v:e,p:t})=>{let n=j(t?.obraSocial),r=z(t?.empresa),i=e.origen===`manual`,a=i?`<span class="text-[10px] text-slate-400" title="Marcada como hecha a mano, sin evolución cargada">✋</span>`:e.evolucionoSistema?`<span class="text-brand-600">✅</span>`:`<span class="text-amber-600">⏳</span>`,o=i?`<span class="text-slate-300">—</span>`:n?`<span class="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">N/A</span>`:e.firmoPlanillaOS?`<span class="text-brand-600">✅</span>`:`<span class="text-amber-600">⏳</span>`;return`<tr class="hover:bg-slate-50">
<td class="px-4 py-3 text-xs text-slate-600 whitespace-nowrap">${te(e.fecha)}</td>
<td class="px-4 py-3 text-sm font-medium text-slate-800">${N(t?.nombre||`Paciente eliminado`)}</td>
<td class="px-4 py-3 hidden sm:table-cell"><span class="text-[10px] px-1.5 py-0.5 rounded-full font-medium ${r}">${N(t?.empresa||`Sin empresa`)}</span></td>
<td class="px-4 py-3 text-center">${a}</td>
<td class="px-4 py-3 text-center">${o}</td>
</tr>`}).join(``)}
</tbody>
</table>
</div>
<div class="px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs text-slate-500">${m.length} visita${m.length===1?``:`s`}</div>`}function Fe(){let e=document.getElementById(`view-cards`),n=document.getElementById(`view-list`);t.viewMode===`list`?(e.classList.remove(`active`),n.classList.add(`active`)):(e.classList.add(`active`),n.classList.remove(`active`))}document.getElementById(`view-cards`).addEventListener(`click`,()=>{t.viewMode=`cards`,d(),Fe(),U()}),document.getElementById(`view-list`).addEventListener(`click`,()=>{t.viewMode=`list`,d(),Fe(),U()});function Ie(e=null){if(document.getElementById(`form-paciente`).reset(),document.getElementById(`pac-id`).value=``,e){let t=O(e);if(!t)return;document.getElementById(`modal-paciente-title`).textContent=`Editar Paciente`,document.getElementById(`pac-id`).value=t.id,document.getElementById(`pac-nombre`).value=t.nombre||``,document.getElementById(`pac-dni`).value=t.dni||``,document.getElementById(`pac-nac`).value=t.fechaNacimiento||``,document.getElementById(`pac-direccion`).value=t.direccion||``,document.getElementById(`pac-piso`).value=t.piso||``,document.getElementById(`pac-empresa`).value=t.empresa||``,document.getElementById(`pac-os`).value=t.obraSocial||``,document.getElementById(`pac-afiliado`).value=t.numeroAfiliado||``,document.getElementById(`pac-contacto`).value=t.contacto||``,document.getElementById(`pac-estado`).value=t.estado||`Activo`,document.getElementById(`pac-opioides`).value=t.usaOpioides||`No`}else document.getElementById(`modal-paciente-title`).textContent=`Nuevo Paciente`;document.getElementById(`modal-paciente`).classList.remove(`hidden`)}document.getElementById(`form-paciente`).addEventListener(`submit`,async e=>{e.preventDefault();let n=document.getElementById(`pac-id`).value,r={nombre:document.getElementById(`pac-nombre`).value.trim(),dni:document.getElementById(`pac-dni`).value.trim(),fechaNacimiento:document.getElementById(`pac-nac`).value,direccion:document.getElementById(`pac-direccion`).value.trim(),piso:document.getElementById(`pac-piso`).value.trim(),empresa:document.getElementById(`pac-empresa`).value.trim(),obraSocial:document.getElementById(`pac-os`).value.trim(),numeroAfiliado:document.getElementById(`pac-afiliado`).value.trim(),contacto:document.getElementById(`pac-contacto`).value.trim(),estado:document.getElementById(`pac-estado`).value,usaOpioides:document.getElementById(`pac-opioides`).value},i;if(n){let e=t.pacientes.findIndex(e=>k(e.id,n));e>=0&&(t.pacientes[e]={...t.pacientes[e],...r},i=t.pacientes[e]),A(`Paciente actualizado`)}else i={id:u(),...r},t.pacientes.push(i),A(`Paciente creado`);d(),y(`Pacientes`,i),Q(`modal-paciente`),W()});function Le(e){let n=O(e);if(!n)return;let r=S(n.fechaNacimiento),i=t.evoluciones.filter(e=>k(e.pacienteId,n.id)).sort((e,t)=>(t.fechaVisita||``).localeCompare(e.fechaVisita||``)),a=t.agenda.filter(e=>k(e.pacienteId,n.id)),o=j(n.obraSocial),s=z(n.empresa);document.getElementById(`detalle-content`).innerHTML=`
<div class="flex flex-wrap items-start justify-between gap-4 mb-5 pb-5 border-b border-slate-100">
<div class="flex items-center gap-4">
<div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white flex items-center justify-center text-2xl font-bold">${String(n.nombre||`?`).charAt(0).toUpperCase()}</div>
<div>
<h3 class="text-xl font-bold text-slate-800">${N(n.nombre)}</h3>
<p class="text-sm text-slate-500">${N(n.dni||`Sin DNI`)} ${r===null?``:`· `+r+` años`}</p>
<div class="flex gap-2 mt-1">
<span class="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-brand-100 text-brand-700">${n.estado}</span>
<span class="inline-block text-xs font-medium px-2 py-0.5 rounded-full ${s}">${N(n.empresa||`Sin empresa`)}</span>
</div>
${n.estado===`Fuera de seguimiento`?``:`<div class="flex flex-wrap gap-1.5 mt-2">${I(n.id)}${ge(n)}</div>`}
</div>
</div>
<div class="flex gap-2">
${P(n)?`<a href="${P(n)}" target="_blank" rel="noopener" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 flex items-center gap-1">📍 Cómo llegar</a>`:``}
<button data-action="edit-paciente" data-id="${n.id}" class="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700">✏️ Editar</button>
<button data-action="delete-paciente" data-id="${n.id}" class="px-3 py-2 bg-rose-50 hover:bg-rose-100 rounded-lg text-sm font-medium text-rose-600">🗑️ Eliminar</button>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<div class="space-y-2"><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wide">Datos personales</h4><div class="bg-slate-50 rounded-xl p-3 space-y-1.5 text-sm"><p><span class="text-slate-500">Dirección:</span> <strong>${N(n.direccion||`-`)}</strong> ${n.piso?`· `+N(n.piso):``}</p><p><span class="text-slate-500">Nacimiento:</span> <strong>${C(n.fechaNacimiento)}</strong></p><p><span class="text-slate-500">Contacto:</span> <strong>${N(n.contacto||`-`)}</strong></p></div></div>
<div class="space-y-2"><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wide">Cobertura</h4><div class="bg-slate-50 rounded-xl p-3 space-y-1.5 text-sm"><p><span class="text-slate-500">Obra Social:</span> <strong>${N(n.obraSocial||`-`)}</strong> ${o?`<span class="ml-1 text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">No requiere planilla</span>`:``}</p><p><span class="text-slate-500">Nº Afiliado:</span> <strong>${N(n.numeroAfiliado||`-`)}</strong></p><p><span class="text-slate-500">Opioides:</span> <strong class="${n.usaOpioides===`Sí`?`text-amber-600`:`text-slate-700`}">${n.usaOpioides}</strong></p></div></div>
</div>
<div class="mb-5"><div class="flex items-center justify-between mb-3"><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wide">Agenda (${a.length})</h4><button data-action="add-agenda-paciente" data-id="${n.id}" class="text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-medium">+ Agendar</button></div>${a.length===0?`<p class="text-sm text-slate-400 italic">Sin visitas agendadas</p>`:`<div class="space-y-2">${a.map(e=>{let t=e.horaInicio||`--:--`,n=e.recurrente!==!1,r=D(t,45),i=n?`<span class="text-[10px] text-brand-600">🔁 recurrente</span>`:`<span class="text-[10px] text-indigo-600">📌 puntual</span>`;return`<div class="bg-brand-50 border border-brand-200 rounded-lg px-3 py-2 text-xs flex items-center justify-between"><div><strong class="text-brand-800">${e.diaSemana}</strong> · <span class="time-badge">${t} - ${r}</span> ${i}${e.notasAgenda?`<p class="text-slate-600 mt-0.5 italic">📝 ${N(e.notasAgenda)}</p>`:``}</div><button data-action="edit-agenda" data-id="${e.id}" class="text-slate-500 hover:text-slate-700">✏️</button></div>`}).join(``)}</div>`}</div>
<div><div class="flex items-center justify-between mb-3"><h4 class="text-xs font-bold text-slate-500 uppercase tracking-wide">Pendientes (${i.length})</h4><button data-action="new-evolucion-paciente" data-id="${n.id}" class="text-xs bg-brand-600 hover:bg-brand-700 text-white px-3 py-1.5 rounded-lg font-medium">+ Nuevo pendiente</button></div>${i.length===0?`<p class="text-sm text-slate-400 italic">Sin pendientes cargados</p>`:`<div class="space-y-3">${i.map(e=>{let t=o?`<span class="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">📋 N/A</span>`:`<span class="text-[10px] px-1.5 py-0.5 rounded ${e.firmoPlanillaOS?`bg-brand-100 text-brand-700`:`bg-slate-200 text-slate-500`}">${e.firmoPlanillaOS?`✓ Firma`:`○ Firma`}</span>`;return`<div class="bg-slate-50 border border-slate-200 rounded-xl p-4"><div class="flex items-center justify-between mb-2"><p class="text-xs font-semibold text-slate-700">📅 ${C(e.fechaVisita)}</p><div class="flex gap-1.5"><span class="text-[10px] px-1.5 py-0.5 rounded ${e.evolucionoSistema?`bg-brand-100 text-brand-700`:`bg-slate-200 text-slate-500`}">${e.evolucionoSistema?`✓ Sist.`:`○ Sist.`}</span>${t}</div></div><p class="text-sm text-slate-700 whitespace-pre-wrap">${e.notas?N(e.notas):`<em class="text-slate-400">Sin notas</em>`}</p></div>`}).join(``)}</div>`}</div>`,document.getElementById(`modal-detalle`).classList.remove(`hidden`)}function Re(){let e=D(document.getElementById(`ag-hora`).value||`09:00`,45);document.getElementById(`ag-hora-preview`).textContent=`Libre: ${e}`}function q(){let e=document.getElementById(`ag-dia`).value,t=document.getElementById(`ag-fecha`),n=document.getElementById(`ag-fecha-preview-text`),r=document.getElementById(`ag-recurrente-dia`),o=document.getElementById(`ag-recurrente`).checked,s=document.getElementById(`ag-intervalo-wrap`),c=parseInt(document.getElementById(`ag-intervalo`).value,10)||1;if(r.textContent=e.toLowerCase(),s.classList.toggle(`hidden`,!o),!t.value||t.dataset.lastDia!==e){let n=w(a),r=i[e],o=new Date(n);o.setDate(n.getDate()+r),t.value=E(o),t.dataset.lastDia=e}if(t.value){let r=ne(t.value);n.innerHTML=o?`<strong>${c===1?`todos los ${e.toLowerCase()}`:`cada ${c} semanas, los ${e.toLowerCase()}`}</strong> · primera aparición: ${r}`:`<strong>solo ${r}</strong> (visita puntual)`}else n.textContent=`-`}function J(){let e=document.getElementById(`ag-id`).value,n=document.getElementById(`ag-saltos-section`),r=document.getElementById(`ag-saltos-list`);if(!e){n.classList.add(`hidden`);return}let i=t.agenda.find(t=>k(t.id,e));if(!i||i.recurrente===!1){n.classList.add(`hidden`);return}n.classList.remove(`hidden`);let a=i.semanasSaltadas||[];r.innerHTML=a.length===0?`<p class="text-[11px] text-amber-700 italic">Sin semanas saltadas</p>`:a.map(e=>{let t=typeof e==`string`?e:e.semana,n=typeof e==`object`?e.movidoA:null;return`<div class="flex items-center justify-between bg-white rounded px-2 py-1 border border-amber-200"><span class="text-xs text-amber-800">${n?`⏭️ Semana del ${te(t)} · ↪️ movida a ${N(n.dia)} ${n.hora||``}`:`⏭️ Semana del ${te(t)}`}</span><button type="button" data-action="remove-salto" data-fecha="${t}" class="text-amber-600 hover:text-amber-800 text-xs">✕</button></div>`}).join(``)}function Y(e=null,n=null,r=null){document.getElementById(`form-agenda`).reset(),document.getElementById(`ag-id`).value=``,document.getElementById(`btn-delete-agenda`).classList.add(`hidden`),document.getElementById(`ag-recurrente`).checked=!1;let o=document.getElementById(`ag-fecha`);o.value=``,o.dataset.lastDia=``;let s=document.getElementById(`ag-paciente`);if(s.innerHTML=t.pacientes.slice().sort((e,t)=>{let n=+(e.estado===`Fuera de seguimiento`),r=+(t.estado===`Fuera de seguimiento`);return n===r?String(e.nombre||``).localeCompare(String(t.nombre||``),`es`):n-r}).map(e=>`<option value="${N(e.id)}">${N(e.nombre)}${e.empresa?` (`+N(e.empresa)+`)`:``}${e.estado===`Fuera de seguimiento`?` · fuera`:``}${e.usaOpioides===`Sí`?` 💊`:``}</option>`).join(``),e){let n=t.agenda.find(t=>k(t.id,e));if(!n)return;if(document.getElementById(`modal-agenda-title`).textContent=`Editar Visita`,document.getElementById(`ag-id`).value=n.id,document.getElementById(`ag-paciente`).value=n.pacienteId,document.getElementById(`ag-dia`).value=n.diaSemana,document.getElementById(`ag-hora`).value=n.horaInicio||`09:00`,document.getElementById(`ag-recurrente`).checked=n.recurrente!==!1,document.getElementById(`ag-intervalo`).value=String(n.intervaloSemanas||1),document.getElementById(`ag-notas`).value=n.notasAgenda||``,document.getElementById(`btn-delete-agenda`).classList.remove(`hidden`),n.recurrente===!1&&n.semanaEspecifica){let e=w(0),t=new Date(String(n.semanaEspecifica).trim()+`T00:00:00`),r=w(Math.round((t-e)/6048e5)),a=i[n.diaSemana];r.setDate(r.getDate()+a),o.value=E(r)}else if(n.recurrente!==!1){let e=w(a),t=i[n.diaSemana],r=new Date(e);r.setDate(e.getDate()+t),o.value=E(r)}o.dataset.lastDia=n.diaSemana}else{document.getElementById(`modal-agenda-title`).textContent=`Nueva visita`,n&&(document.getElementById(`ag-dia`).value=n),r&&(document.getElementById(`ag-paciente`).value=r);let e=B(a).filter(e=>e.diaSemana===(n||`Lunes`));if(e.length>0){let t=e.sort((e,t)=>(t.horaLibre||``).localeCompare(e.horaLibre||``))[0];document.getElementById(`ag-hora`).value=t.horaLibre}}Re(),q(),J(),document.getElementById(`modal-agenda`).classList.remove(`hidden`)}document.getElementById(`ag-hora`).addEventListener(`change`,Re),document.getElementById(`ag-dia`).addEventListener(`change`,q),document.getElementById(`ag-fecha`).addEventListener(`change`,q),document.getElementById(`ag-intervalo`).addEventListener(`change`,q),document.getElementById(`ag-recurrente`).addEventListener(`change`,()=>{q(),J()}),document.getElementById(`btn-add-salto`).addEventListener(`click`,()=>{let e=document.getElementById(`ag-salto-fecha`).value;if(!e)return;let n=R(e),r=document.getElementById(`ag-id`).value,i=t.agenda.find(e=>k(e.id,r));i&&(i.semanasSaltadas||=[],i.semanasSaltadas.some(e=>(typeof e==`string`?e:e.semana)===n)?A(`Esa semana ya estaba saltada`,`info`):(i.semanasSaltadas.push(n),d(),y(`Agenda`,i),J(),A(`Semana saltada`)),document.getElementById(`ag-salto-fecha`).value=``)}),document.getElementById(`form-agenda`).addEventListener(`submit`,async e=>{e.preventDefault();let n=document.getElementById(`ag-id`).value,r=document.getElementById(`ag-recurrente`).checked,i=document.getElementById(`ag-fecha`).value,a=null;!r&&i&&(a=R(i));let o=n?t.agenda.find(e=>k(e.id,n)):null,s=1,c=null;r&&(s=parseInt(document.getElementById(`ag-intervalo`).value,10)||1,c=o&&o.fechaInicioRecurrencia?o.fechaInicioRecurrencia:R(i));let l={pacienteId:String(document.getElementById(`ag-paciente`).value).trim(),diaSemana:document.getElementById(`ag-dia`).value,horaInicio:document.getElementById(`ag-hora`).value,recurrente:r,intervaloSemanas:s,fechaInicioRecurrencia:c,semanaEspecifica:a,notasAgenda:document.getElementById(`ag-notas`).value.trim()},f;if(n){let e=t.agenda.findIndex(e=>k(e.id,n));if(e>=0){let n=t.agenda[e];f={...n,...l,semanasSaltadas:r&&n.semanasSaltadas||[]},t.agenda[e]=f}A(`Visita actualizada`)}else f={id:u(),...l,semanasSaltadas:[]},t.agenda.push(f),A(`Visita creada`);d(),y(`Agenda`,f),Q(`modal-agenda`),W()}),document.getElementById(`btn-delete-agenda`).addEventListener(`click`,async()=>{let e=document.getElementById(`ag-id`).value;e&&confirm(`¿Eliminar esta visita?`)&&(t.agenda=t.agenda.filter(t=>!k(t.id,e)),d(),b(`Agenda`,e),Q(`modal-agenda`),W(),A(`Visita eliminada`,`info`))});function ze(e){let t=B(a).find(t=>k(t.id,e)&&!t.movida);if(!t)return;let n=O(t.pacienteId);document.getElementById(`mover-id`).value=t.id,document.getElementById(`mover-info`).textContent=`${n?n.nombre:`Paciente`} · actualmente ${t.diaSemana} ${t.horaInicio}`,document.getElementById(`mover-dia`).value=t.diaSemana,document.getElementById(`mover-hora`).value=t.horaInicio,document.getElementById(`modal-mover`).classList.remove(`hidden`)}document.getElementById(`form-mover`).addEventListener(`submit`,async e=>{e.preventDefault();let n=document.getElementById(`mover-id`).value,r=document.getElementById(`mover-dia`).value,o=document.getElementById(`mover-hora`).value,s=t.agenda.find(e=>k(e.id,n));if(!s){Q(`modal-mover`);return}let c=w(a),l=E(c),f=i[r],p=new Date(c);p.setDate(c.getDate()+f);let m=E(p);if(s.recurrente===!1){s.diaSemana=r,s.horaInicio=o,s.semanaEspecifica=l,d(),y(`Agenda`,s),Q(`modal-mover`),W(),A(`Visita movida`);return}let h={id:u(),pacienteId:s.pacienteId,diaSemana:r,horaInicio:o,recurrente:!1,semanaEspecifica:l,semanasSaltadas:[],notasAgenda:s.notasAgenda||``};t.agenda.push(h),s.semanasSaltadas||=[],s.semanasSaltadas=s.semanasSaltadas.filter(e=>(typeof e==`string`?e:e.semana)!==l),s.semanasSaltadas.push({semana:l,movidoA:{dia:r,fecha:m,hora:o,agendaIdDestino:h.id}}),d(),y(`Agenda`,s),y(`Agenda`,h),Q(`modal-mover`),W(),A(`Visita movida a `+r)});function Be(e=null,n=null,r=null){document.getElementById(`form-evolucion`).reset(),document.getElementById(`ev-id`).value=``,document.getElementById(`ev-agendaId`).value=e||``,document.getElementById(`ev-pacienteId`).value=n||``;let i=null;if(e){let n=t.agenda.find(t=>k(t.id,e));n&&(i=O(n.pacienteId))}else n&&(i=O(n));if(!i){A(`Paciente no encontrado`,`error`);return}document.getElementById(`ev-pacienteId`).value=i.id;let a=S(i.fechaNacimiento);document.getElementById(`ev-paciente-info`).innerHTML=`<div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">${String(i.nombre||`?`).charAt(0).toUpperCase()}</div><div class="flex-1"><p class="font-semibold text-brand-900">${N(i.nombre)}</p><p class="text-xs text-brand-700">${N(i.dni||``)} ${a===null?``:`· `+a+` años`} ${i.usaOpioides===`Sí`?`· 💊 Opioides`:``} · 🏥 ${N(i.obraSocial||`-`)}</p></div></div>${i.direccion?`<p class="text-xs text-brand-700 mt-2">🏠 ${N(i.direccion)} ${i.piso?`· `+N(i.piso):``}</p>`:``}${i.contacto?`<p class="text-xs text-brand-700">📞 ${N(i.contacto)}</p>`:``}`;let o=r||E(new Date);document.getElementById(`ev-fecha`).value=o;let s=t.evoluciones.find(e=>k(e.pacienteId,i.id)&&String(e.fechaVisita||``).trim()===o),c=document.getElementById(`ev-notas`),l=document.getElementById(`ev-notas-hint`);s?(document.getElementById(`ev-id`).value=s.id,c.value=s.notas||``,document.getElementById(`ev-sistema`).checked=!!s.evolucionoSistema,l.textContent=`Ya había una nota para esta fecha — la estás editando, no duplicando.`):(c.value=``,document.getElementById(`ev-sistema`).checked=!1,l.textContent=``);let u=j(i.obraSocial),d=document.getElementById(`ev-firma-wrap`),f=document.getElementById(`ev-firma-oculto-msg`),p=document.getElementById(`ev-firma`);u?(d.classList.add(`hidden`),f.classList.remove(`hidden`),p.checked=!1):(d.classList.remove(`hidden`),f.classList.add(`hidden`),s&&(p.checked=!!s.firmoPlanillaOS)),document.getElementById(`modal-evolucion`).classList.remove(`hidden`),s&&c.value&&setTimeout(()=>{c.focus(),c.setSelectionRange(c.value.length,c.value.length)},0)}document.getElementById(`form-evolucion`).addEventListener(`submit`,async e=>{e.preventDefault();let n=document.getElementById(`ev-id`).value,r=document.getElementById(`ev-pacienteId`).value,i=j(O(r)?.obraSocial),a={pacienteId:r,fechaVisita:document.getElementById(`ev-fecha`).value,notas:document.getElementById(`ev-notas`).value.trim(),evolucionoSistema:document.getElementById(`ev-sistema`).checked,firmoPlanillaOS:i?null:document.getElementById(`ev-firma`).checked},o;if(n){let e=t.evoluciones.findIndex(e=>k(e.id,n));e>=0?(o={...t.evoluciones[e],...a},t.evoluciones[e]=o):(o={id:u(),...a},t.evoluciones.push(o))}else o={id:u(),...a},t.evoluciones.push(o);d(),y(`Evoluciones`,o),A(n?`Pendiente actualizado`:`Pendiente guardado`),Q(`modal-evolucion`),W()});function Ve(){document.getElementById(`cfg-api-url`).value=t.config.apiUrl||``,document.getElementById(`cfg-api-token`).value=t.config.apiToken||``,$(),document.getElementById(`modal-config`).classList.remove(`hidden`)}document.getElementById(`btn-save-config`).addEventListener(`click`,()=>{t.config.apiUrl=document.getElementById(`cfg-api-url`).value.trim(),t.config.apiToken=document.getElementById(`cfg-api-token`).value.trim();let e=document.getElementById(`cfg-origen-manana`),n=document.getElementById(`cfg-origen-tarde`);e&&(t.config.origenManana=e.value.trim()),n&&(t.config.origenTarde=n.value.trim()),d(),$(),Q(`modal-config`),A(`Configuración guardada`),t.config.apiUrl&&t.config.apiToken&&h()});function He(e){let t=e.split(/\r?\n/)[0]||``,n=(t.match(/,/g)||[]).length,r=(t.match(/;/g)||[]).length,i=(t.match(/\t/g)||[]).length;return i>n&&i>r?`	`:r>n?`;`:`,`}function Ue(e,t){e.charCodeAt(0)===65279&&(e=e.slice(1));let n=[],r=[],i=``,a=!1;for(let o=0;o<e.length;o++){let s=e[o];a?s===`"`?e[o+1]===`"`?(i+=`"`,o++):a=!1:i+=s:s===`"`?a=!0:s===t?(r.push(i),i=``):s===`
`?(r.push(i),n.push(r),r=[],i=``):s===`\r`||(i+=s)}return(i.length>0||r.length>0)&&(r.push(i),n.push(r)),n.filter(e=>e.length>1||e.length===1&&e[0].trim()!==``)}function We(e){if(!e)return``;e=String(e).trim();let t=e.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(t)return`${t[1]}-${t[2].padStart(2,`0`)}-${t[3].padStart(2,`0`)}`;if(t=e.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/),t){let e=t[3];return e.length===2&&(e=(parseInt(e,10)<=29?`20`:`19`)+e),`${e}-${t[2].padStart(2,`0`)}-${t[1].padStart(2,`0`)}`}return``}let X=[{key:`nombre`,label:`Nombre`,required:!0,aliases:[`nombre`,`nya`,`paciente`,`nombre pac`,`pac`,`nombre completo`]},{key:`dni`,label:`DNI`,required:!1,aliases:[`dni`,`documento`,`doc`,`num documento`]},{key:`direccion`,label:`Dirección`,required:!1,aliases:[`direccion`,`dirección`,`domicilio`,`calle`,`dir`]},{key:`piso`,label:`Piso`,required:!1,aliases:[`piso`,`depto`,`departamento`,`dpto`]},{key:`empresa`,label:`Empresa`,required:!1,aliases:[`empresa`,`prepaga`,`familia`,`responsable`]},{key:`obraSocial`,label:`Obra Social`,required:!1,aliases:[`obra social`,`os`,`cobertura`]},{key:`numeroAfiliado`,label:`Nº Afiliado`,required:!1,aliases:[`numero afiliado`,`nro afiliado`,`afiliado`]},{key:`contacto`,label:`Contacto`,required:!1,aliases:[`contacto`,`telefono`,`tel`,`teléfono`,`celular`,`familiar`]},{key:`fechaNacimiento`,label:`Fecha nacim.`,required:!1,aliases:[`fecha nacimiento`,`nacimiento`,`fnac`,`fecha nac`]},{key:`usaOpioides`,label:`Opioides`,required:!1,aliases:[`opioides`,`usa opioides`,`opioide`]},{key:`estado`,label:`Estado`,required:!1,aliases:[`estado`,`situacion`,`situación`]}];function Ge(e){let t={};return e.forEach((e,n)=>{let r=M(e);if(r){for(let e of X)if(t[e.key]===void 0&&e.aliases.some(e=>r===M(e)||r.includes(M(e)))){t[e.key]=n;break}}}),t}function Ke(e,t){let n=n=>t[n]===void 0?``:(e[t[n]]||``).trim(),r=n(`nombre`);if(!r)return null;let i=We(n(`fechaNacimiento`)),a=n(`usaOpioides`);if(a){let e=M(a);a=e===`si`||e===`s`||e===`yes`||e===`1`?`Sí`:`No`}else a=`No`;let o=n(`estado`);if(!o)o=`Activo`;else{let e=M(o);o=e.includes(`fuera`)?`Fuera de seguimiento`:e.includes(`inter`)?`Intermitente`:`Activo`}return{id:u(),nombre:r,dni:n(`dni`),direccion:n(`direccion`),piso:n(`piso`),empresa:n(`empresa`),obraSocial:n(`obraSocial`),numeroAfiliado:n(`numeroAfiliado`),contacto:n(`contacto`),fechaNacimiento:i,usaOpioides:a,estado:o}}let Z={headers:[],rows:[],mapping:{}};function qe(){document.getElementById(`csv-step1`).classList.remove(`hidden`),document.getElementById(`csv-step2`).classList.add(`hidden`),document.getElementById(`csv-file`).value=``,document.getElementById(`csv-paste`).value=``,document.getElementById(`modal-csv`).classList.remove(`hidden`)}function Je(e){if(!e||!e.trim()){A(`Contenido vacío`,`error`);return}let t=document.querySelector(`input[name="csv-sep"]:checked`).value,n=t===`auto`?He(e):t,r=document.getElementById(`csv-has-header`).checked,i=Ue(e,n);if(i.length===0){A(`No se encontraron filas`,`error`);return}r?(Z.headers=i[0],Z.rows=i.slice(1)):(Z.headers=i[0].map((e,t)=>`Columna `+(t+1)),Z.rows=i),Z.mapping=Ge(Z.headers),Ye()}function Ye(){document.getElementById(`csv-step1`).classList.add(`hidden`),document.getElementById(`csv-step2`).classList.remove(`hidden`);let e=document.getElementById(`csv-mapping`);e.innerHTML=X.map(e=>{let t=[`<option value="">— sin asignar —</option>`].concat(Z.headers.map((t,n)=>`<option value="${n}" ${Z.mapping[e.key]===n?`selected`:``}>${N(t)}</option>`)).join(``);return`<div class="flex items-center gap-2 p-2 rounded-lg border border-slate-200"><label class="text-xs font-medium text-slate-700 w-32 flex-shrink-0">${e.label}${e.required?` <span class="text-rose-500">*</span>`:``}</label><select data-field="${e.key}" class="csv-map-select flex-1 px-2 py-1.5 rounded border border-slate-200 text-xs">${t}</select></div>`}).join(``),e.querySelectorAll(`.csv-map-select`).forEach(e=>{e.addEventListener(`change`,()=>{let t=e.dataset.field,n=e.value===``?void 0:parseInt(e.value);n===void 0?delete Z.mapping[t]:Z.mapping[t]=n,Xe()})}),Xe()}function Xe(){let e=document.getElementById(`csv-preview-table`),n=Z.rows.slice(0,10),r=Object.keys(Z.mapping);e.innerHTML=`<thead><tr>${r.map(e=>`<th class="text-left text-[10px] font-semibold text-slate-600">${X.find(t=>t.key===e).label}</th>`).join(``)}</tr></thead><tbody>${n.map(e=>`<tr>${r.map(t=>{let n=Z.mapping[t];return`<td>${N(e[n]||``)}</td>`}).join(``)}</tr>`).join(``)}</tbody>`;let i=Z.rows.map(e=>Ke(e,Z.mapping)).filter(Boolean),a=i.filter(e=>!t.pacientes.some(t=>t.dni&&e.dni&&t.dni===e.dni)).length;document.getElementById(`csv-stats`).textContent=`${i.length} pacientes · ${a} nuevos · ${i.length-a} a actualizar`}async function Ze(){let e=Z.rows.map(e=>Ke(e,Z.mapping)).filter(Boolean);if(e.length===0){A(`Ningún paciente válido`,`error`);return}let n=0,r=0,i=[];e.forEach(e=>{if(e.dni){let n=t.pacientes.find(t=>t.dni===e.dni);if(n){Object.assign(n,{nombre:e.nombre,direccion:e.direccion,piso:e.piso,empresa:e.empresa,obraSocial:e.obraSocial,numeroAfiliado:e.numeroAfiliado,contacto:e.contacto,fechaNacimiento:e.fechaNacimiento,usaOpioides:e.usaOpioides,estado:e.estado}),i.push(n),r++;return}}t.pacientes.push(e),i.push(e),n++}),d();for(let e of i)try{await y(`Pacientes`,e)}catch(e){console.error(e)}Q(`modal-csv`),W(),A(`Importados: ${n} nuevos, ${r} actualizados`)}document.getElementById(`csv-dropzone`).addEventListener(`click`,()=>document.getElementById(`csv-file`).click()),document.getElementById(`csv-file`).addEventListener(`change`,e=>{let t=e.target.files[0];if(!t)return;let n=new FileReader;n.onload=e=>{document.getElementById(`csv-paste`).value=e.target.result,Je(e.target.result)},n.readAsText(t,`UTF-8`)}),document.getElementById(`csv-preview-btn`).addEventListener(`click`,()=>Je(document.getElementById(`csv-paste`).value)),document.getElementById(`csv-back-btn`).addEventListener(`click`,()=>{document.getElementById(`csv-step1`).classList.remove(`hidden`),document.getElementById(`csv-step2`).classList.add(`hidden`)}),document.getElementById(`csv-import-btn`).addEventListener(`click`,Ze);function Q(e){document.getElementById(e).classList.add(`hidden`)}document.querySelectorAll(`.modal-close`).forEach(e=>e.addEventListener(`click`,e=>{let t=e.target.closest(`[id^="modal-"]`);t&&t.classList.add(`hidden`)})),document.querySelectorAll(`[id^="modal-"]`).forEach(e=>e.addEventListener(`click`,t=>{t.target===e&&e.classList.add(`hidden`)})),window.__palKeydown||(window.__palKeydown=!0,document.addEventListener(`keydown`,e=>{if(e.key!==`Escape`)return;let t=document.getElementById(`paliativos-host`)||document.body,n=Array.from(t.querySelectorAll(`[id^="modal-"]:not(.hidden)`));n.length!==0&&n[n.length-1].classList.add(`hidden`)})),document.addEventListener(`click`,e=>{let n=e.target.closest(`[data-action]`);if(n)switch(n.dataset.action){case`ver-agenda`:Y(n.dataset.id);break;case`edit-agenda`:e.stopPropagation(),Y(n.dataset.id);break;case`abrir-mover`:e.stopPropagation(),ze(n.dataset.id);break;case`toggle-card-expandida`:{let e=n.dataset.id;l.has(e)?l.delete(e):l.add(e),V();break}case`marcar-hecha`:{e.stopPropagation();let r=t.agenda.find(e=>k(e.id,n.dataset.id));r&&(r.fechasHechas||=[],r.fechasHechas.includes(n.dataset.fecha)||r.fechasHechas.push(n.dataset.fecha),d(),y(`Agenda`,r),W(),A(`Marcada como hecha`));break}case`desmarcar-hecha`:{e.stopPropagation();let r=t.agenda.find(e=>k(e.id,n.dataset.id));r&&r.fechasHechas&&(r.fechasHechas=r.fechasHechas.filter(e=>e!==n.dataset.fecha),d(),y(`Agenda`,r),W(),A(`Marca quitada`,`info`));break}case`deshacer-movida`:{let e=n.dataset.id,r=n.dataset.semana,i=t.agenda.find(t=>k(t.id,e));if(i&&i.semanasSaltadas){let e=i.semanasSaltadas.find(e=>typeof e==`object`&&e.semana===r);e&&e.movidoA&&e.movidoA.agendaIdDestino&&(t.agenda=t.agenda.filter(t=>!k(t.id,e.movidoA.agendaIdDestino)),b(`Agenda`,e.movidoA.agendaIdDestino)),i.semanasSaltadas=i.semanasSaltadas.filter(e=>(typeof e==`string`?e:e.semana)!==r),d(),y(`Agenda`,i),W(),A(`Movimiento deshecho`,`info`)}break}case`evolucionar`:e.stopPropagation(),Be(n.dataset.agenda,null,n.dataset.fecha);break;case`add-agenda`:Y(null,n.dataset.dia);break;case`ruta-turno`:{e.preventDefault(),e.stopPropagation();let t=n.dataset.dia,r=n.dataset.turno,i=le(B(a).filter(e=>!e.movida&&e.diaSemana===t&&e.turno===r).sort((e,t)=>String(e.horaInicio||``).localeCompare(String(t.horaInicio||``))).map(e=>oe(O(e.pacienteId))),ue(r));if(!i){A(`No hay direcciones para armar la ruta`,`info`);break}window.open(i,`_blank`,`noopener`);break}case`add-agenda-paciente`:Q(`modal-detalle`),Y(null,null,n.dataset.id);break;case`add-agenda-paciente-pending`:Y(null,null,n.dataset.id);break;case`select-day-mobile`:o=parseInt(n.dataset.day),s[a]=o,xe();break;case`ver-paciente`:Le(n.dataset.id);break;case`edit-paciente`:Q(`modal-detalle`),Ie(n.dataset.id);break;case`delete-paciente`:{if(!confirm(`¿Eliminar este paciente y todas sus visitas y evoluciones?`))return;let e=n.dataset.id,r=t.agenda.filter(t=>k(t.pacienteId,e)),i=t.evoluciones.filter(t=>k(t.pacienteId,e));t.pacientes=t.pacientes.filter(t=>!k(t.id,e)),t.agenda=t.agenda.filter(t=>!k(t.pacienteId,e)),t.evoluciones=t.evoluciones.filter(t=>!k(t.pacienteId,e)),d(),b(`Pacientes`,e),r.forEach(e=>b(`Agenda`,e.id)),i.forEach(e=>b(`Evoluciones`,e.id)),Q(`modal-detalle`),W(),A(`Paciente eliminado`,`info`);break}case`new-evolucion-paciente`:Q(`modal-detalle`),Be(null,n.dataset.id);break;case`delete-evolucion`:if(!confirm(`¿Eliminar este pendiente?`))return;t.evoluciones=t.evoluciones.filter(e=>!k(e.id,n.dataset.id)),d(),b(`Evoluciones`,n.dataset.id),W(),A(`Pendiente eliminado`,`info`);break;case`toggle-sistema`:{let e=t.evoluciones.find(e=>k(e.id,n.dataset.id));e&&(e.evolucionoSistema=!e.evolucionoSistema,d(),y(`Evoluciones`,e),W(),A(e.evolucionoSistema?`Marcado: cargado en sistema`:`Desmarcado`,e.evolucionoSistema?`success`:`info`));break}case`toggle-firma`:{let e=t.evoluciones.find(e=>k(e.id,n.dataset.id));e&&(e.firmoPlanillaOS=!e.firmoPlanillaOS,d(),y(`Evoluciones`,e),W(),A(e.firmoPlanillaOS?`Marcado: firmó planilla`:`Desmarcado`,e.firmoPlanillaOS?`success`:`info`));break}case`delete-agenda`:{if(!confirm(`¿Eliminar esta visita?`))return;let e=n.dataset.id;t.agenda=t.agenda.filter(t=>!k(t.id,e)),d(),b(`Agenda`,e),W(),A(`Visita eliminada`,`info`);break}case`remove-salto`:{let e=n.dataset.fecha,r=document.getElementById(`ag-id`).value,i=t.agenda.find(e=>k(e.id,r));if(i&&i.semanasSaltadas){let n=i.semanasSaltadas.find(t=>(typeof t==`string`?t:t.semana)===e);n&&typeof n==`object`&&n.movidoA&&n.movidoA.agendaIdDestino&&(t.agenda=t.agenda.filter(e=>!k(e.id,n.movidoA.agendaIdDestino)),b(`Agenda`,n.movidoA.agendaIdDestino)),i.semanasSaltadas=i.semanasSaltadas.filter(t=>(typeof t==`string`?t:t.semana)!==e),d(),y(`Agenda`,i),J(),H(),A(`Semana restaurada`)}break}}}),document.querySelectorAll(`.nav-btn`).forEach(e=>e.addEventListener(`click`,()=>Qe(e.dataset.view)));function Qe(e){document.querySelectorAll(`.view`).forEach(e=>e.classList.remove(`active`)),document.getElementById(`view-`+e).classList.add(`active`),document.querySelectorAll(`.nav-btn`).forEach(t=>{t.classList.toggle(`active`,t.dataset.view===e),t.dataset.view===e?t.classList.remove(`text-slate-600`):t.classList.add(`text-slate-600`)}),e===`agenda`&&H(),e===`pacientes`&&U(),e===`visitas`&&Oe(),e===`planilla`&&K()}document.getElementById(`btn-add-patient`).addEventListener(`click`,()=>Ie()),document.getElementById(`btn-add-visit`).addEventListener(`click`,()=>Y()),document.getElementById(`btn-toggle-vista`).addEventListener(`click`,()=>{c=c===`comprimida`?`completa`:`comprimida`,l.clear(),V()}),document.getElementById(`search-pacientes`).addEventListener(`input`,U),document.getElementById(`filter-estado`).addEventListener(`change`,U),document.getElementById(`filter-empresa`).addEventListener(`change`,U),document.getElementById(`filter-os`).addEventListener(`change`,U),document.getElementById(`search-visitas`).addEventListener(`input`,Oe),document.getElementById(`btn-prev-week`).addEventListener(`click`,()=>{a--,H()}),document.getElementById(`btn-next-week`).addEventListener(`click`,()=>{a++,H()}),document.getElementById(`btn-today`).addEventListener(`click`,()=>{a=0,o=ae(),s[0]=o,H()}),document.getElementById(`btn-config`).addEventListener(`click`,Ve),document.getElementById(`btn-config-mobile`).addEventListener(`click`,Ve),document.getElementById(`btn-sync-now`).addEventListener(`click`,h),document.getElementById(`btn-sync-now-mobile`).addEventListener(`click`,h),document.getElementById(`btn-import-csv`).addEventListener(`click`,qe),document.getElementById(`btn-import-csv-mobile`).addEventListener(`click`,qe),document.getElementById(`btn-prev-month`).addEventListener(`click`,()=>{G--,K()}),document.getElementById(`btn-next-month`).addEventListener(`click`,()=>{G++,K()}),document.getElementById(`planilla-filter-empresa`).addEventListener(`change`,K),document.getElementById(`planilla-solo-pendientes`).addEventListener(`change`,K),document.getElementById(`btn-export`).addEventListener(`click`,()=>{let e={version:8,exportedAt:new Date().toISOString(),pacientes:t.pacientes,agenda:t.agenda,evoluciones:t.evoluciones,tarifas:t.tarifas,config:t.config},n=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`paliativos-backup-${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(r),A(`Backup exportado`)}),document.getElementById(`btn-import`).addEventListener(`click`,()=>{document.getElementById(`import-file`).value=``,document.getElementById(`modal-import`).classList.remove(`hidden`)}),document.getElementById(`btn-do-import`).addEventListener(`click`,()=>{let e=document.getElementById(`import-file`).files[0];if(!e){A(`Seleccioná un archivo`,`error`);return}let n=new FileReader;n.onload=async e=>{try{let n=JSON.parse(e.target.result);if(!n.pacientes)throw Error(`Formato inválido`);if(!confirm(`¿Reemplazar todos los datos actuales?`))return;if(t.pacientes=n.pacientes||[],t.agenda=n.agenda||[],t.evoluciones=n.evoluciones||[],t.tarifas=n.tarifas||[],n.config&&(t.config={...t.config,...n.config}),d(),t.config.apiUrl&&t.config.apiToken)try{await g(`POST`,{action:`sync`,data:{pacientes:t.pacientes,agenda:t.agenda,evoluciones:t.evoluciones,tarifas:t.tarifas},token:t.config.apiToken}),t.lastSync=new Date().toISOString(),d()}catch(e){console.error(e)}Q(`modal-import`),W(),A(`Datos importados`)}catch(e){A(`Error: `+e.message,`error`)}},n.readAsText(e)}),document.getElementById(`btn-reset`).addEventListener(`click`,()=>{confirm(`¿Reiniciar con datos demo? Se perderán los datos actuales.`)&&(t.pacientes=[],t.agenda=[],t.evoluciones=[],x(),W(),A(`Datos demo cargados`,`info`))});function $e(){let e=document.getElementById(`origen-status`);if(!e)return;let n=String(t.config.origenManana||``).trim(),r=String(t.config.origenTarde||``).trim();e.textContent=(n?`Mañana: desde `+n:`Mañana: empieza en el primer paciente`)+` · `+(r?`Tarde: desde `+r:`Tarde: empieza en el primer paciente`),document.querySelectorAll(`[data-action="ruta-turno"]`).forEach(e=>{e.title=F(e.getAttribute(`data-turno`))})}function $(){[[`origen-manana`,`origenManana`],[`origen-tarde`,`origenTarde`],[`cfg-origen-manana`,`origenManana`],[`cfg-origen-tarde`,`origenTarde`]].forEach(([e,n])=>{let r=document.getElementById(e);r&&r!==document.activeElement&&(r.value=t.config[n]||``)}),$e()}function et(){[[`origen-manana`,`cfg-origen-manana`,`origenManana`],[`origen-tarde`,`cfg-origen-tarde`,`origenTarde`]].forEach(([e,n,r])=>{[e,n].forEach(i=>{let a=document.getElementById(i);a&&!a.dataset.boundOrigen&&(a.dataset.boundOrigen=`1`,a.addEventListener(`input`,()=>{t.config[r]=a.value;let o=i===e?n:e,s=document.getElementById(o);s&&s!==document.activeElement&&(s.value=a.value),d(),$e()}),a.addEventListener(`blur`,()=>{t.config[r]=a.value.trim(),d(),$()}))})})}et(),f(),t.pacientes.length===0&&t.agenda.length===0&&t.evoluciones.length===0&&x(),Fe(),W(),$(),t.lastSync&&v(`ok`),t.config.apiUrl&&t.config.apiToken&&setTimeout(h,500)}var s=n();function c(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let n=document.getElementById(`paliativos-host`),r=!n;return n||(n=document.createElement(`div`),n.id=`paliativos-host`),n.className=`min-h-screen bg-slate-50 text-slate-800`,n.hidden=!1,t.replaceChildren(n),r&&a(n),()=>{n.hidden=!0,document.body.appendChild(n)}},[]),(0,s.jsx)(`div`,{ref:e,className:`min-h-screen bg-slate-50 text-slate-800`})}export{c as component};
export default function TarefaTabela({ tarefas }) {
  if (tarefas.length === 0) {
    return (
      <p className="text-center text-gray-500">
        Nenhuma tarefa cadastrada ainda.
      </p>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
              ID
            </th>
            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
              Descrição
            </th>
            <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id} className="border-t border-gray-200">
              <td className="px-4 py-3 text-sm text-gray-700">{tarefa.id}</td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {tarefa.descricao}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {tarefa.concluida ? "Concluída" : "Pendente"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
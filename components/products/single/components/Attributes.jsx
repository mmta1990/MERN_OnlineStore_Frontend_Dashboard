import React from 'react'

export default function Attributes ({ attributes }) {
  return (
      <div className="tab-pane fade" id="ui" role="tabpanel" aria-labelledby="ui-tab">
        {attributes.map((attribute, index) => (
                    <div key={index} className="attribute-group">
            <h6 className="mb-3">{attribute.title}</h6>
            <div className="table-responsive">

                <table className="table table-striped table-bordered">
      <tbody>
            {attribute.attributes.map((attributeItem, index) => (
                      <tr key={attributeItem.hash} >
                        <td>{attributeItem.title}</td>
                        <td>{attributeItem.value}</td>
                      </tr>
            ))}
                 </tbody>
    </table>
      </div>

          </div>
        ))}
      </div>

  )
}

const InputField = ({label, type, name, value, onChangeData, error}) => {
    return (
        <div className="mb-6">
            {type === "textarea" ? (
                <>
                    <label className="block text-left" htmlFor={name}>{label}</label>
                    <textarea className="border-2 rounded-md border-black w-full px-2 py-1" type="text" rows="3" name={name} value={value} onChange={onChangeData} required></textarea>
                    {error && (
                        <p className="text-red-600 text-left">
                            {error}
                        </p>
                    )}
                </>
            ) : (
                <>
                    <label className="block text-left" htmlFor={name}>{label}</label>
                    <input className="border-2 rounded-md border-black w-full px-2 py-1" type="text" name={name} value={value} onChange={onChangeData} required></input>
                    {error && (
                        <p className="text-red-600 text-left">
                            {error}
                        </p>
                    )}
                </>
            )}
        </div>
    );
}

export default InputField;